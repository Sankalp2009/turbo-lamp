import styles from "./CountriesCard.module.css";

function CountriesCard({country, Rank, population}) {
  return (
  <div data-testid="country-card" className={styles.container}>
      <div>
        Country: <b data-testid="country-card-name">{country}</b>
      </div>
      <div>
        Rank: <b data-testid="country-card-name">{Rank}</b>
      </div>
      <div>
        Population: <b data-testid="country-card-population">{population}</b>
      </div>
    </div>
  );
}

export default CountriesCard;
