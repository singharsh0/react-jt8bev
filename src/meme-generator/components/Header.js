import '../index.css';

export default function Header() {

  return (
    <header className='header'>
      <section className='section--tag'>
      <img className='header--img' src="../assets/troll_face.svg" alt="Airbnb" width="100px"></img>
      <h4 className='header--title'>Meme Generator</h4></section>
      <div className='header--project'>React Course</div>
    </header>
  );
}
