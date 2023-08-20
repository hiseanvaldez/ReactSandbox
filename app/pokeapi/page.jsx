/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Field, Form, Formik } from "formik";
import _ from "lodash";
import Image from "next/image";
import { useEffect } from "react";
import { object, string } from "yup";
import voltorb from "../assets/images/voltorb.png";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import { useLazyGetPokemonByNameQuery } from "../redux/services/pokemonApi";

const typeColor = {
  normal: "#b7b7a8",
  fire: "#ff6043",
  water: "#51a8ff",
  electric: "#fdd251",
  grass: "#8bd46e",
  ice: "#7dd4ff",
  fighting: "#c56e60",
  poison: "#b76ea8",
  ground: "#e2c56e",
  flying: "#9aa8ff",
  psychic: "#ff6ea8",
  bug: "#b7c543",
  rock: "#c5b77d",
  ghost: "#7d7dc5",
  dragon: "#8b7df1",
  dark: "#8b6e60",
  steel: "#b7b7c5",
  fairy: "#f1a8f1",
};

const page = () => {
  const [trigger, { data, isLoading, error }] = useLazyGetPokemonByNameQuery();

  const initialValues = {
    name: "",
  };

  const validationSchema = object().shape({
    name: string().required(),
  });

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
    }
  }, [data, isLoading]);

  const handleSubmit = (value) => {
    trigger(value.name.toLowerCase());
  };

  return (
    <Container>
      <h3>RTK Query integration with PokéAPI</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form>
              <div className="flex flex-col">
                <Field
                  name="name"
                  label="Pokémon Name or Pokédex Number"
                  component={Input}
                  required
                />
                <div className="mb-3">
                  <Button type="submit" label="Search" onClick={() => {}} />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      {error && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <Image src={voltorb} width={100} height={100} alt="error" />
          <p className="text-4xl font-semibold">Pokémon not found!</p>
        </div>
      )}
      {data && !error && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-4xl font-semibold">
            #{data.id} {_.capitalize(data.name)}
          </p>
          <div className="flex flex-row">
            <Image
              src={data.sprites?.back_default}
              alt={data.name}
              width={350}
              height={350}
            />
            <Image
              src={data.sprites?.front_default}
              alt={data.name}
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-3xl font-semibold">Type</p>
            <div className="flex gap-2">
              {data.types.map((type, idx) => (
                <div
                  key={idx}
                  className={`flex h-8 w-24 items-center justify-center rounded border-[1px] border-black/20 p-1 text-white`}
                  style={{ background: typeColor[type.type.name] }}
                >
                  <p className="drop-shadow-md">
                    {type.type.name.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-3xl font-semibold">Abilities</p>
            <div className="flex gap-2">
              {data.abilities.map((ability, idx) => (
                <div key={idx} className={`justify-cente flex items-center`}>
                  <p>{ability.ability.name.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default page;
