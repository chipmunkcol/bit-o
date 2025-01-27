import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 3000,
  // headers: {},
  // withCredentials: false,
})

instance.interceptors.request.use(
  function (config) {
    // 스토리지에서 access토큰 가져오는 로직
    const accessToken = localStorage.getItem('access_token')

    // 쿠키에서 refresh토큰 가져오는 로직
    const cookies = document.cookie
    const refreshToken = cookies.split('refresh_token=')[1]

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    if (refreshToken) {
      config.headers['x-refresh-token'] = refreshToken // header name: x-refresh-token 체크!
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  async function (response) {
    // 2xx 범위에 있는 상태 코드인경우
    return response
  },
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드인 경우
    // console.log(error)
    const {
      config,
      response: { status, data },
    } = error

    if (status === 401 && data?.message === 'Access Token is Expired') {
      // && data.message === 'TokenExpired'v

      // 로그인 시 백엔드에서 쿠키에 저장한 refresh_token
      const cookies = document.cookie
      const refreshToken = cookies.split('refresh_token=')[1]
      if (!refreshToken) {
        // logoutAndHome();
        return
      }

      try {
        const tokenRefreshResult = await instance.post('/api/v1/auth/token', {
          refreshToken,
        })
        if (tokenRefreshResult.status === 200) {
          console.log('🚀 ~ tokenRefreshResult:', tokenRefreshResult)

          const { accessToken } = tokenRefreshResult.data
          // 새로 발급받은 토큰을 스토리지에 저장
          localStorage.setItem('accessToken', accessToken)
          // localStorage.setItem('refreshToken', refreshToken)
          // 토큰 갱신 성공. API 재요청
          return instance(config)
        } else {
          // logout();
        }
      } catch (err) {
        console.error(err)
        // logout();
      }
    }

    return Promise.reject(error)
  },
)

export default instance
