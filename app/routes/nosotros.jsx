import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'






export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }, 
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {

    
  return (
   <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt='imagen sobre nosotros'/>

            <div>
                <p>Ut ullamcorper maximus neque ornare fermentum. Fusce facilisis congue lorem vitae fermentum. Nulla facilisi. Donec finibus mollis blandit. Suspendisse tincidunt, ligula in malesuada congue, nisl neque eleifend ex, quis luctus arcu ligula sit amet tellus. Donec odio urna, tristique ornare placerat at, egestas eu sapien. Morbi eget purus quis mauris venenatis mattis in non diam. Sed auctor varius erat, et elementum urna consectetur at.Ut ullamcorper maximus neque ornare fermentum. Fusce facilisis congue lorem vitae fermentum. Nulla facilisi. Donec finibus mollis blandit. Suspendisse tincidunt, ligula in malesuada congue, nisl neque eleifend ex, quis luctus arcu ligula sit amet tellus. Donec odio urna, tristique ornare placerat at, egestas eu sapien. Morbi eget purus quis mauris venenatis mattis in non diam. Sed auctor varius erat, et elementum urna consectetur at.</p>
            </div>

        </div>
   </main>
  )
}

export default Nosotros