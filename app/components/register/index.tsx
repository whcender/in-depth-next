const index = () => {
    return (
      <div className="flex flex-col gap-4 w-full p-5">
          <input type="text" placeholder="username" className="outline-none border p-3 w-ful" />
          <input type="text" placeholder="email" className="outline-none border p-3 w-ful" />
          <input type="password" placeholder="password" className="outline-none border p-3 w-ful" />
          <button className="bg-slate-300 p-3 w-full hover:bg-slate-200">Register</button>
      </div>
    )
  }
  
  export default index