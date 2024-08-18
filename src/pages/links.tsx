import { ProfileCircle } from "@/app/components/profile/profile__circle"
import "../app/components/linktree/styles.css"

export default function Linktree() {
	return (

		<div className="flex flex-col min-h-screen">

			<div className="flex flex-col flex-grow w-full py-10 items-center justify-center">
				<ProfileCircle url="https://github.com/otthonleao.png" title="logomarca da Ótica Alemã" />
				<h1 className="md:text-4xl text-3xl font-bold text-white mt-5">Nome da Empresa</h1>
				<span className="text-gray-50 mb-5 mt-1">Algum slogan ou mensagem</span>

				<main className="flex flex-col w-11/12 max-w-xl text-center items-center">

					<section className="bg-green-400 mb-4 w-3/4 py-3 rounded-lg select-none transition-transform hover:scale-105">
						<a href="https://wa.me/5592981062708" rel="noopener noreferrer">
							<p className="text-black text-base md:text-lg"> Whatsapp</p>
						</a>
					</section>
					<section className="bg-gray-200 mb-4 w-3/4 py-3 rounded-lg select-none transition-transform hover:scale-105">
						<a href="/" target="_blank">
							<p className="text-black text-base md:text-lg">🖥️ Visite nossa página</p>
						</a>
					</section>
					

				</main>
			</div>

			<footer className="fixed bottom-0 w-screen flex justify-center text-center">
				{/* <a href="#">
					<p className="bg-gray-800 w-screen py-3 px-5"><span className="font-bold">Endereço: </span>Rua Henrique Martins, 470 - Centro. Manaus - AM, 69010-010</p>
				</a> */}
					<p className="bg-gray-800 w-screen py-3 px-3 text-xs">
						<span className="font-bold">© 2024
							<a href="https://github.com/otthonleao" rel="noopener noreferrer" target="_blank"> Muraton Software</a>
						</span>| development by
							<a href="https://github.com/otthonleao" rel="noopener noreferrer" target="_blank"> Otthon Leão 🧑‍💻</a></p>

			</footer>
		</div>
	)
}
