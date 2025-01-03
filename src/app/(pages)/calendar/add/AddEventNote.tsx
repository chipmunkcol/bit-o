import Image from 'next/image'

const AddEventNote = () => {
  return (
    <div className="flex gap-[1.75rem]">
      <div>
        <Image alt="clock" src="/images/icon/pencil.png" width={24} height={24} />
      </div>

      <input placeholder="노트" />
    </div>
  )
}

export default AddEventNote
