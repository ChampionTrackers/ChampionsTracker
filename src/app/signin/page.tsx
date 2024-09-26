import Image from 'next/image'
import logo from '../assets/noob.png'
import '../components/input'
import { Input } from '../components/input'
import {Button}  from '../components/button'

// https://blog.rocketseat.com.br/react-diferenca-entre-named-e-default-exports/
export default function Signup() {
    return (
        // class é reservada do JS, utilizar o className
        <main className = "relative w-full min-h-screen">
            <div className="custom-bg absolute w-full min-h-screen custom-pattern">
            </div>
            <div className="content relative w-full min-h-screen flex items-center justify-center ">
                <div className="hidden md:flex flex-col justify-center items-center w-full min-h-screen ">
                    <div className="w-3/5">
                        <h1 className="text-4xl font-bold tracking-wide">BEM VINDO AO CHAMPIONS TRACKER</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat in quam scelerisque suscipit.</p> 
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full min-h-screen bg-background">
                    <Image
                        src={logo}
                        alt='Noob Pic'
                        width={100} 
                        height={100} 
                    />
                    <h2 className='text-2xl my-10 font-medium'>Logar no Champions Tracker</h2>

                    <form action="" method="get" className='flex flex-col gap-2 items-center'>
                        <Input placeholder='Email' type='email'/>                        
                        <Input placeholder='Senha' type='password'/>                 

                        <span className='w-full mt-7'>
                            <input className='mr-2' type='checkbox'/>
                            <label htmlFor="" className='text-xs'>Lembrar minha senha</label>
                        </span>

                        <Button label='LOGIN' color='accent'/>
                        {/* <button className="bg-primary mt-10 font-medium px-4 py-3 rounded-[5px] hover:bg-primary-light">LOGAR</button>                    */}
                    </form>

                    

                </div>
            </div>
        </main>
    )
}
