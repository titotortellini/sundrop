import { useEffect, useState } from "react";
import styles from "./CharacterSheet.module.css";
import Select from "./Select";
import Input from "./Input";
import {
  fetchAvailableSubclasses,
  fetchClasses,
} from "../api/characterResourcesService";
import { Character } from "../interfaces/character";

function CharacterSheet() {
  const [characterData, setCharacterData] = useState<Character>({
    name: "",
    class: "",
    subclass: "",
  });
  const [error, setError] = useState<string | null>(null);

  const [charClasses, setCharClasses] = useState([]);
  const [charSubclasses, setCharSubclasses] = useState([]);

  useEffect(() => {
    console.log({ characterData });
  }, [characterData]);

  useEffect(() => {
    const getClasses = async () => {
      try {
        const data = await fetchClasses();
        setCharClasses(data.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };
    getClasses();
  }, []);

  const handleChangeClass = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClass = event.target.value;
    setCharacterData({ ...characterData, class: selectedClass });
    (async () => {
      try {
        const data = await fetchAvailableSubclasses(selectedClass);
        setCharSubclasses(data.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    })();
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setCharacterData({ ...characterData, name: newName });
  };

  const handleChangeSubclass = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSubclass = event.target.value;
    setCharacterData({ ...characterData, subclass: newSubclass });
  };

  return (
    <div className={styles.characterSheet}>
      {error && <p>{error}</p>}
      <section>
        <Input label="Character Name" onChange={handleChangeName}></Input>
      </section>

      <section>
        <Select
          name="charClass"
          id="charClass"
          options={charClasses}
          onChange={handleChangeClass}
          label="Class"
        />
      </section>
      {charSubclasses.length > 0 && (
        <section>
          <Select
            id="charSubclass"
            label="Subclass"
            options={charSubclasses}
            onChange={handleChangeSubclass}
          />
        </section>
      )}
    </div>
  );
}

export default CharacterSheet;
