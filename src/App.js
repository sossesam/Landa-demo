import './App.css';
import Dashboard from './component/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubjectTable from './component/SubjectTable';
import EmptyDashboard from './component/EmptyDashboard';


function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/dashboard'  element={<div>Home page</div>}/>
      <Route path='/institution' element={<div>institution</div>}/>
      <Route path='/learning' element={<div>Learning</div>}/>
      <Route path='/' element={<Dashboard />}>
        <Route path='assesment' element={<SubjectTable/>}></Route>
        <Route path='Question Bank' element={<EmptyDashboard />}></Route>
      </Route>
      
     <Route path='/finance' element={<div>Finance</div>}/>
     <Route path='/notification' element={<div>Notification</div>}/>
     <Route path='/support' element={<div>Support</div>}/>
     <Route path='*' element={<div>error page</div>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
