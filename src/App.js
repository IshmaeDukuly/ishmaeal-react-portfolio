import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AuthorCard from './components/AuthorCard';
import Work from './components/Work';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

function App() {
  return (
  <>
    <Navbar />

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
            <AuthorCard />

            {/* <!-- Work --> */}
           <Work / >
            
            {/* <!-- Education --> */}
            <Education />
            {/* <!-- Hobbies --> */}
           <Hobbies />
           </div>
          {/* <!-- /End replace --> */}
      
      </main>
    </div>
    </> 
  );
}

export default App;
