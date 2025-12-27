import type { Car } from "./Car";
import styles from "./CarDetails.module.css";

const CarDetails = () => {
  const cars: Car[] = [
    {id: 1, brand: "Ferrari",model: "F40",year: 1987,km: 88300,isNew: false,},
    { id: 2, brand: "Renault",  model: "Kardian",  km: 0, year: 2025, isNew: true},
    {id: 3, brand: "Chevollet", model: "S10", km: 74000, year: 2019, isNew: false},
    { id: 4, brand: "Fiat", model: "Toro", km: 0, year: 2025, isNew: true},
    {id: 5, brand: "Renault", model: "Megane", km: 45000, year: 2010, isNew: false},
    { id: 6, brand: "Chevrollet", model: "Prisma", km: 95000, year: 2013, isNew: false},
    { id: 7, brand: "Volkswagen", model: "Nivus", km: 0, year: 2024, isNew: true},
    { id: 8, brand: "Ford", model: "Mustang", km: 12000, year: 2021, isNew: false},
    { id: 9, brand: "Honda", model: "Civic", km: 0, year: 2025, isNew: true},
    { id: 10, brand: "Toyota", model: "Corolla", km: 30000, year: 2018, isNew: false},
    { id: 11, brand: "Nissan", model: "Sentra", km: 0, year: 2024, isNew: true},
    { id: 12, brand: "Hyundai", model: "Tucson", km: 60000, year: 2016, isNew: false},
  ];

  return (
    <div className={styles.cd_main_div}>
                        {/* cd = car details*/}
      <h2 className={styles.cd_h2}>Carros disponíveis</h2>

      <ol className={styles.cd_list}>
        {cars.map((car) => (
          <div className={styles.div_item}>
            <li key={car.id}>
              <p>Marca: {car.brand}</p>
              <p>Modelo: {car.model}</p>
              <p>Ano: {car.year}</p>
              {car.km > 0 && <p>KM: {car.km}</p>}
              {car.isNew && <p>Zero KM</p>}
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default CarDetails;
