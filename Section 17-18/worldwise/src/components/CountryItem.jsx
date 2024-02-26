/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const emoji = flagemojiToPNG(country.emoji);
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

export default CountryItem;
