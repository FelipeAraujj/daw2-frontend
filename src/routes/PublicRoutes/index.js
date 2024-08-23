import PaginaLogin from "../../pages/PaginaLogin";
import PaginaCadastro from "../../pages/PaginaCadastro";



const PublicRoutes = {
    path: '/',
    children: [ 
    {
        path: 'cadastro',
        element: <PaginaCadastro />
    },
    {
        path: 'login',
        element: <PaginaLogin />
    }
]

};

export default PublicRoutes;