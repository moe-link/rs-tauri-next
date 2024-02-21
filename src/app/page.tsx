const Homepage = () => {
  return (
    <div className="p-10 flex justify-center">
      <form className="flex items-cneter space-x-3">
        <input name="name" className="w-48 border rounded px-2" placeholder="请输入任务名称" />
        <input name="time" className="w-48 border rounded px-2" placeholder="请输入执行时间" />
        <button type="submit" className="border rounded px-2 min-w-16">添加</button>
      </form>
    </div>
  )
}

export default Homepage