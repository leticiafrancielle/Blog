import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-black text-white ">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Blog pessoal Letícia | Copyright: </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href='https://www.linkedin.com/in/let%C3%ADcia-francielle/' target='_blank' ><LinkedinLogo size={48} weight='bold' /></a>
                        <a href='https://www.instagram.com/leeh.s_black/?igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'><InstagramLogo size={48} weight='bold' /></a>
                        <a href='https://github.com/leticiafrancielle' target='_blank'><GithubLogo size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
