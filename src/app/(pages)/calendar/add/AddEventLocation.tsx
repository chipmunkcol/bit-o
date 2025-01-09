import Image from 'next/image'

const AddEventLocation = () => {
  return (
    <div className="flex gap-[1.75rem]">
      <div>
        <Image alt="clock" src="/images/icon/location.png" width={24} height={24} />
      </div>

      <input placeholder="위치" />
    </div>
  )
}

export default AddEventLocation
