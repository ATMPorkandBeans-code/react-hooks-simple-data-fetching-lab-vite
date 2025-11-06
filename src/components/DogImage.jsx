import { React, useState, useEffect } from "react";
import styles from "../styles/DogImage.module.css";

function DogImage() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  function fetchDog() {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Dog Image</p>
      <button className={styles.button}  onClick={fetchDog}>Fetch New Dog</button>
      {loading ? <p className={styles.loading}>Loading...</p> : <img src={image} className={styles.image} alt="Dog"></img>}
    </div>
  );
}

export default DogImage;
