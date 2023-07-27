const card =[{image: ""}]

export default function Portfolio() {
  
  const handleDeployed1ButtonClick = () => {
    window.location.href = 'https://francisjung.github.io/Film_Face_Off/';
  };

  const handleGithub1ButtonClick = () => {
    window.location.href = 'https://github.com/bswiley/Film_Face_Off';
  };
  const handleDeployed2ButtonClick = () => {
    window.location.href = 'https://spark-concepts-dad483b0ca89.herokuapp.com/';
  };

  const handleGithub2ButtonClick = () => {
    window.location.href = 'https://github.com/bswiley/Spark_Concepts';
  };
  
  return (
    <div className="cardContainer">
      <div className="card">
      <h2>Film Face-Off</h2>
      <img src='../../../../public/images/project1.jpg' 
      alt='image of Film Face-Off project'></img>
      <div className = "profileLinks">
      <button onClick={handleDeployed1ButtonClick}className="deployed">deployed location</button>
      <button onClick={handleGithub1ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      <div className="cardContainer">
      <div className="card">
      <h2>Spark-Concepts</h2>
      <img src='../../../../public/images/project2.jpg'
      alt='image of Film Spark-Concepts project'
      style={{ maxWidth: '500px' }}></img>
      <div className = "profileLinks">
      <button onClick={handleDeployed2ButtonClick} className="deployed">deployed location</button>
      <button onClick={handleGithub2ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      </div>
      <div className="cardContainer">
      <div className="card">
      <h2>Being created</h2>
      <img src='../../../../public/images/project3.jpg'
      alt='image of Film Spark-Concepts project'
      style={{ maxWidth: '500px' }}></img>
      <div className = "profileLinks">
      <button onclick={handleDeployed2ButtonClick} className="deployed">deployed location</button>
      <button onclick={handleGithub2ButtonClick} className="github-link">github repository</button>
      </div>
      </div>
      </div>
      <div className="cardContainer">
      <div className="card">
      <h2>Being created</h2>
      <img src='../../../../public/images/project4.jpg'
      alt='image of Film Spark-Concepts project'
      style={{ maxWidth: '500px' }}></img>
      <div className = "profileLinks">
      <button onclick="window.location.href='https://bswiley.github.io/Film_Face_Off/'" className="deployed">deployed location</button>
      <button onclick="window.location.href='https://github.com/Francisjung/Film_Face_Off'" className="github-link">github repository</button>
      </div>
      </div>
      </div>

      
      
      
    </div>
  );
}
