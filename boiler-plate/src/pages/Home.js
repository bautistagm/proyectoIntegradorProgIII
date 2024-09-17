import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";



const Home = () => {

    return(
        <>
    <h1>Bienvenidos a Cheflix!</h1>
    <main>

    <h2>Peliculas mas Populares</h2>
    <PeliculasGrid/>

    <h2>Cartelera</h2>
   <PeliculasGrid />
    
    </main>

    </>
    )

}



export default Home;