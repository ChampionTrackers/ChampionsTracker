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
                <div className="w-full min-h-screen bg-background">
                form aqui
                </div>
            </div>
        </main>
    )
}
