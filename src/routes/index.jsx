import { Routes, Route, Navigate } from 'react-router-dom';
import Contato from '../pages/contato';
import Shop from '../pages/shop';

function AppRouter() {

    return (
        <Routes>
            <Route path='/shop' element={<Shop />} />
            <Route path="/pagina-inicial" element={<h1>pagina-inicial</h1>} />
            <Route path='/contato' element={<Contato />} />
            <Route path='*' element={<Navigate to='/pagina-inicial' />} />
        </Routes>
    )
}
export default AppRouter