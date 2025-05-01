import { useForm } from 'react-hook-form';

import { useUser } from './hooks/user.hook'
import { IFormUser } from './interfaces/user.interface';

function App() {
  const { data, isPending, createUser, isCreating, refetch } = useUser();
  const { handleSubmit, register, reset } = useForm<IFormUser>()


  if (isPending) return <span>Cargando...</span>

  const onSubmit = (data: IFormUser) => {
  
    createUser(data, {
      onSuccess: () => {
        refetch();
      }
    })

    reset({
      name: '',
      email: ''
    })
  }

  return (
    <div className="flex flex-col h-screen px-[50px] py-[80px] gap-10">

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder='Escribe nombre'
          {...register('name')}
          className='border border-gray-300 rounded-md py-2 px-4 shadow-md w-[300px]'
        />
        <input
          type="email"
          placeholder='Escribe email'
          {...register('email')}
          className='border border-gray-300 rounded-md py-2 px-4 shadow-md w-[300px]'
        />
        <button type="submit"
          className='bg-gray-800 text-white border w-[300px] py-2 px-4 rounded-md shadow-md hover:bg-white hover:text-gray-800 hover:border-gray-700 transition duration-300 disabled:opacity-50'
          disabled={isCreating}
        >
          Agregar
        </button>
      </form>

      <hr className='border border-gray-400'/>

      <div className='flex flex-wrap justify-around gap-5'>
      {
        data?.map((user) => (
          <div key={user.userId} className="border py-2 px-4 h-[100px] w-[300px] flex flex-col justify-center items-center shadow-md rounded-md">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default App
