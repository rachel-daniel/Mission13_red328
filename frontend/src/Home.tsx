import joel from './JoelHiltonHeadshot.jpg';

function HomePage() {
  return (
    <>
      <h1>Welcome to the Joel Hilton Movie Collection</h1>
      <img src={joel} alt="Joel Hilton Headshot"></img>
      <p>It's me, Joel!</p>
      <h5>
        This website contains the movie collection of Joel Hilton himself (yes,
        the man, the myth, the legend)
      </h5>
    </>
  );
}

export default HomePage;
