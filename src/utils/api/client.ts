interface ApiError extends Error {
  statusCode?: number
  code?: string
}

interface RequestConfig extends RequestInit {
  params?: Record<string, string>
}
/**
 * API 요청을 위한 기본 클라이언트
 *
 * @throws {ApiError} API 요청 실패 시 에러
 */
async function client<T>(
  endpoint: string,
  { params, ...customConfig }: RequestConfig = {},
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT

  /***
   * 로그인 만들어지면 고치기
   */
  const accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwamh3b3JrOTdAZ21haWwuY29tIiwiaWF0IjoxNzM3MTEyNTM2LCJleHAiOjE3MzcxMjMzMzYsInN1YiI6ImZha2VFbWFpbEBmYWtlRG9tYWluLmNvbSIsImlkIjowfQ.x4S2TYZGU3rpP6Cl_fsC1EKgyriI6HuoeG-uiqSlPk0'

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }

  const config: RequestInit = {
    ...customConfig,
    headers,
  }

  const queryString = params ? `?${new URLSearchParams(params)}` : ''
  const url = `${apiUrl}${endpoint}${queryString}`

  try {
    const response = await fetch(url, config)

    // 응답 데이터 처리
    const data = await response.json()

    // 응답이 실패했을 경우
    if (!response.ok) {
      const error = new Error(data.message || '요청에 실패했습니다.') as ApiError
      error.statusCode = response.status
      error.code = data.code
      throw error
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('알 수 없는 오류가 발생했습니다.')
  }
}

export { client }
