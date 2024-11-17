import { Children, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from './routes/Homepage/Homepage'
import { Signup } from './routes/Auth/Signup'
import { Login } from './routes/Auth/Login'
import { VerifyEmail } from './routes/Auth/VerifyEmail'
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import { Test } from './routes/Homepage/Test'
import { Test2 } from './routes/Homepage/Test2'
import { Cart } from './routes/Cart/Cart'
import { Admin } from './routes/Admin/Admin'
import { ManageAcc } from './routes/ManageAcc/ManageAcc'
import { useProductsStore } from './store/productStore'

// const RedirectAuthUSer = ({children})=>{
//   const {isAuthenticated,user} = useAuthStore()
  
//   if(isAuthenticated && user.isverified){
//     if(user.isAdmin){
//       return <Navigate to="/admin" replace />
//     }else return <Navigate to="/" replace />
//   }
//   return children
// }

// const ProtectedRoute =  ({ children }) => {
// 	const { isAuthenticated, user, checkAuth } = useAuthStore();
// 	if (!isAuthenticated) {
// 		return <Navigate to='/login' replace />;
// 	}

// 	if (!user.isverified) {
// 		return <Navigate to='/verify-email' replace />;
// 	}

// 	if (isAuthenticated) {
// 		return <Navigate to='/' replace />;
// 	}
// 	return children;
// };


const RedirectAdminUSer = ({children})=>{
  const {isAdmin} = useAuthStore()
  

    if(!isAdmin){
      return <Navigate to="/" replace />
    }
  return children
}

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user,isAdmin } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isverified) {
		return <Navigate to='/verify-email' replace />;
	}

		if(user.isAdmin){
		  return <Navigate to="/admin" replace />
		}
	 

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isverified) {
		return <Navigate to='/' replace />;
	}

	return children;
};


function App() {
  const { isCheckingAuth, checkAuth,user } = useAuthStore();
  const { products } = useProductsStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);
  return (
    <>
    {/* <Routes>
    <Route path='/admin' element={
        <RedirectAuthUSer>
          <Admin />
        </RedirectAuthUSer>
      } />
      <Route path='/' element={
		<RedirectAuthUSer>
			<Homepage />
		</RedirectAuthUSer>
		} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/signup' element={
        <RedirectAuthenticatedUser>
          <Signup />
        </RedirectAuthenticatedUser>
      } />
      <Route path='/login' element={
        <RedirectAuthenticatedUser>
          <Login />
        </RedirectAuthenticatedUser>
      } />
        <Route
					path='/manage-account'
					element={

              <ManageAcc />
					}
				/>
      <Route path='/verify-email' element={<VerifyEmail />} />
	  
    </Routes>
    <Toaster /> */}
    			<Routes>
				<Route path='/admin' element={
					<RedirectAdminUSer>
						<Admin />
					</RedirectAdminUSer>
				} />
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Homepage />
						 </ProtectedRoute>
					}
				/>
        		<Route
					path='/manage-account'
					element={
							<ManageAcc />
					}
				/>
				<Route
					path='/cart'
					element={
							<Cart />
					}
				/>
				<Route
					path='/signup'
					element={
						<RedirectAuthenticatedUser>
							<Signup />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route
					path='/login'
					element={
						<RedirectAuthenticatedUser>
							<Login />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route path='/verify-email' element={<VerifyEmail />} />
				 <Route path='*' element={<Navigate to='/' replace />} /> 
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Toaster />
    </>
  )
}

export default App
