import images from '../images/globe.png'
export default function Header() {
    return (
        <header>
            <img src={images} />
            <h1>my travel journal.</h1>
        </header>
    )
}