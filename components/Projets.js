import Card from 'react-bootstrap/Card';

function Projets() {
   return (
           <div className='bg-black'>
            
             <div id='Projets' className="columns-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-black text-center ml-40 mr-40">
               <div className="rounded-lg shadow-lg max-w-full h-auto columns>-1 text-white">
               <h3>Réseau Sociale d'information</h3>
               <img src="https://www.docstring.fr/media/contentblocks/socialnetwork-1920x816-1920x816.webp" alt="Description de l'image" width={300} height={400} className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 md:mr-6  transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle  flex-col  " />
                  <p>Un réseau social qui permette aux utilisateurs de poster des nouveautés. Chaque utilisateur peut poster un produit ou un article qu'il a découvert et qu'il pense pourrait intéresser la communauté. Chaque utilisateur peut voter pour une publication et la page d'accueil affiche les publications les plus populaires en premier.</p>
               </div>
   
               <div className="rounded-lg shadow-lg max-w-full h-auto columns-1 text-white">
               <h3>Site e-commerce</h3>
               <img src="https://www.docstring.fr/media/contentblocks/ecommerce-1920x816-1920x816.webp" alt="Description de l'image" width={300} height={400} className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 md:mr-6  transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle  flex-col" />
                  <p>Une application d’e-commerce, qui permet aux utilisateurs d'acheter des produits en ligne, de suivre leur commande et de gérer leur compte.La création d'un site e-commerce est un classique du développement web. Il est donc intéressant de s'y frotter car vous serez très probablement amené à travailler sur ce genre de site dans votre carrière</p>
               </div>
   
   
               <div className="rounded-lg shadow-lg max-w-full h-auto columns-1 text-white">
               <h3>Site Agence de Voyage</h3>
               <img src="https://www.docstring.fr/media/contentblocks/booking-1920x816-1920x816.webp" alt="Description de l'image" width={300} height={400} className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 md:mr-6  transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle  flex-col  " />
                  <p>Un site web de réservation de voyages qui permet aux utilisateurs de rechercher et de réserver des vols, des hôtels et des activités en ligne.La création d'un site de réservation de voyages offre plusieurs défis intéressants pour un développeur web.Tout d'abord, cela vous permet de travailler sur une fonctionnalité de que l'emplacement.</p>
               </div>
               <div className="rounded-lg shadow-lg max-w-full h-auto columns-1 text-white">
               <h3>Application  de listes des tâches</h3>
               <img src="https://www.docstring.fr/media/contentblocks/todoapp-1920x816-1920x816.webp" alt="Description de l'image" width={300} height={400} className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 md:mr-6  transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle  flex-col  " />
                  <p>Une application qui permet de créer des listes de tâches associées à différentes catégories. Les tâches peuvent avoir une date spécifique ou non et peuvent être marquées comme complétées ou non.</p>
               </div>
           
             </div>
           <div className="bg-black columns-2 ">
             <div className="text-white justify-center px-4 py-16 p-s text-center ml-20 mr-30">
             <h1>A Propos de moi</h1>
             <p>En tant que développeur, j’ai toujours été passionné par la création de solutions élégantes et efficaces à des problèmes complexes. J’ai une base solide en développement de logiciels, avec un accent sur les technologies Web telles que HTML, CSS et JavaScript. J’aime travailler à la fois sur le front-end et le back-end des applications, et je suis toujours à la recherche de moyens d’optimiser les performances, d’améliorer l’expérience utilisateur et d’assurer le plus haut niveau de qualité du code.</p>
             <p>Tout au long de ma carrière, j’ai travaillé sur un large éventail de projets, allant de simples sites Web statiques à des applications complexes au niveau de l’entreprise. J’ai l’expérience de travailler avec une variété d’outils et de frameworks de développement, notamment React, Angular, Vue.js, Node.js et Laravel. Je suis toujours désireux d’apprendre et d’explorer de nouvelles technologies, et je suis constamment à la recherche d’opportunités pour améliorer mes compétences et mes connaissances.</p>
           </div>
         <div className="justify-center px-4 py-16 ">
          <img src='https://kinsta-developer-portfolio-ir8w8.kinsta.app/_next/image?url=%2Fimages%2Fabout.jpeg&w=640&q=75' alt="Description de l'image" width={300} height={500} className="  transition-transform duration-500 ease-in-out transform hover:scale-110 hover:animate-wiggle "/>
   
         </div>

           </div>
         <div id='Contact' className="bg-black">
      
            <div className=" text-white px-4 py-16 bg-black  text-center ml-40 mr-40">
        <h1>Contactez Nous</h1>
        <p>Si vous souhaitez que nous travaillions ensemble, si vous avez des questions ou si vous souhaitez que je prenne la parole lors de votre événement, ma boîte de réception est toujours ouverte. Que ce soit juste pour dire bonjour, je ferai de mon mieux pour vous répondre ! À votre santé!</p>
            </div>
            <div className='text-white text-center'>
          <p>&copy; 2024 Georges Michel Ngor NDENE. Tous droits réservés.</p>
         </div>
           
            </div>
        <div/>
           
       <div>

       </div>
         
       
       </div>
   );
}

export default Projets;