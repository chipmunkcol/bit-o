import Image from 'next/image'

const AddEventTime = () => {
  return (
    <div className="flex gap-[1.75rem]">
      <div>
        <Image alt="clock" src="/images/icon/clock.png" width={24} height={24} />
      </div>

      <div className="flex flex-col gap-[0.8rem] w-full">
        <div>시간 조정</div>
        <div className="border border-black rounded-full w-[50px]">
          <p className="text-center ">매일</p>
        </div>
      </div>
    </div>
  )
}

export default AddEventTime
