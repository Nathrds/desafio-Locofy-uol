import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import dataBase from "../utils/dataCountryCity.json";

import ErrorForm from "./ErrorsHelperText";

import { useEffect, useState } from "react";

import Sedan from "./carType/Sedan";

import Van from "./carType/Van";

import SemiLuxury from "./carType/SemiLuxury";

import Luxury from "./carType/Luxury";

import styles from "./carType/carType.module.css";

import SuccessScreen from "./successScreen/SuccessScreen";

import ModalError from "./modal/Modal";

// Estilo customizado para o TextField utilizando o styled do Material-UI
const StyledForm = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    color: "#fff",

    "& fieldset": {
      borderColor: "#fff",
    },

    "&:hover fieldset": {
      borderColor: "#FBA403 !important",
    },
  },

  "& .MuiFormLabel-root": {
    color: "#666666DE",
    "&.Mui-focused": {
      color: "#FBA403",
      borderColor: "#FBA403 !important",
    },
  },
}));

// Esquema de validação utilizando o yup
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Invalid name")
    .matches(/^[^\d]+ [^\d]+$/, "Invalid name"),
  emailAddress: yup.string().email("Invalid email").required("Invalid email"),
  country: yup.string().required("Invalid country"),
  city: yup.string().required("Invalid city"),
  referralCode: yup.string().matches(/^[A-Z]{3}-\d{3}$/, "Invalid code"),
  driveMyOwnCar: yup
    .boolean()
    .transform((originalValue) => originalValue || false),
  carType: yup.string().when("driveMyOwnCar", {
    is: true,
    then: (schema) => schema.required("Select a vehicle type"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

// Interface representando a estrutura dos dados do formulário
export interface FormData {
  fullName: string;
  emailAddress: string;
  country: string;
  city: string;
  referralCode: string;
  driveMyOwnCar: boolean;
  carType: string;
}

// Componente principal do formulário
const DriveForm: React.FC = () => {
  const { // Configuração do react-hook-form
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      driveMyOwnCar: false,
      carType: "",
    },
  });

  // Estado para controle do switch (carro próprio ou não)
  const [carTypeSwitch, setCarTypeSwitch] = useState(true);

  // Função para lidar com a mudança no switch
  function handleOnChangeSwitch(event: React.ChangeEvent<HTMLInputElement>) {
    setCarTypeSwitch(event.target.checked);
  }

  console.log(errors);

  // Estado para armazenar dados sobre países e cidades
  const [countryCity, setCountryCity] = useState<typeof dataBase>();
  const [allCountry, setAllCountry] = useState<Array<string>>([]);
  const [allCity, setAllCity] = useState<Array<string>>([]);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const [selectCity, setSelectCity] = useState<string>("");

  // Estado para controle do registro do motorista e erros
  const [drivrerRegister, setDriverRegister] = useState(true);
  const [error, setError] = useState(false);

  // Efeito colateral para carregar dados do arquivo JSON e preencher os países
  useEffect(() => {
    setCountryCity(dataBase);
    const countryKeys = Object.keys(dataBase);
    setAllCountry(countryKeys);
  }, []);

  // Função para lidar com a mudança de país
  function handleChangeCountry(event: SelectChangeEvent) {
    const country = event.target.value as string;
    setSelectCountry(country);

    const cities = countryCity[country];
    setAllCity(cities);
  }

  // Função para lidar com a mudança de cidade
  function handleChangeCity(event: SelectChangeEvent) {
    const city = event.target.value as string;
    setSelectCity(city);
  }

  // Função para lidar com o envio do formulário
  function handleSubmitForm(data: FormData) {
    console.log(data);
    
    const {
      carType,
      city,
      country,
      emailAddress,
      fullName,
      referralCode,
      driveMyOwnCar,
    } = data;
    //lógica para lidar com o envio do formulário
    const carTypeText = driveMyOwnCar ? carType : "Car Type not selected";
    
    async function postCarsData() {
      async function postData() {
        const res = await fetch("http://localhost:3000/cars", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            carType: carTypeText,
            city,
            country,
            emailAddress,
            fullName,
            referralCode,
            id: "1",
          }),
        });
        return res;
      }

      const response = await postData();

      if (response.ok) {
        reset();
        setSelectCountry("");
        setSelectCity("");
        setAllCity([]);
        setDriverRegister(false);
        setError(false);
      } else {
        setError(true);
      }
    }
    postCarsData();
  }
  // Função para lidar com a submissão de um novo carro
  function handleSubmitNewCar() {
    setDriverRegister(true);
  }

  return (
    <>
      {drivrerRegister ? (
        <>
          {error && (
            <ModalError
              open={true}
              errorMessage="Failed to submit the form. Please try again later."
              onClose={() => setError(false)}
            />
          )}{" "}
          (
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            style={{
              backgroundColor: "#282828",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "1324px",
              margin: "0px auto 123px auto",
              padding: "30px",
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <img
                src="../../src/assets/Popup-image-car.png"
                alt="Driver Registration"
                style={{ maxWidth: "100%", marginRight: "18px" }}
              />

              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "27px",
                    color: "#FBA403",
                    fontWeight: "700",
                  }}
                >
                  Drive with MyRide
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Register as a driver using the form below. Our team will
                  assess and get back to you within 48 hours.
                </Typography>
              </Box>
            </Box>

            <Box>
              <FormControl fullWidth margin="normal">
                <StyledForm
                  label="Full Name"
                  {...register("fullName")}
                  error={!!errors.fullName}
                />
                {errors.fullName && (
                  <ErrorForm
                    label={errors.fullName?.message || "Invalid name"}
                  />
                )}
              </FormControl>

              <FormControl fullWidth margin="normal">
                <StyledForm
                  label="Email Address"
                  {...register("emailAddress")}
                  error={!!errors.emailAddress}
                />
                {errors.emailAddress && (
                  <ErrorForm
                    label={errors.emailAddress?.message || "Invalid email"}
                  />
                )}
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel sx={{ color: "#666666DE" }} htmlFor="country">
                  Country
                </InputLabel>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Country"
                      error={!!errors.country}
                      displayEmpty
                      onChange={(e) => {
                        handleChangeCountry(e);
                        field.onChange(e);
                      }}
                      value={selectCountry}
                      sx={{
                        color: "#fff",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#fff",
                          color: "#fff",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FBA403 !important",
                          color: "#fff !important",
                        },
                        "& input": {
                          color: "#fff",
                        },
                        "& label": {
                          color: "secondary.labelColor",
                        },
                      }}
                      id="country"
                      aria-label="Select Country"
                    >
                      {allCountry.map((country, index) => (
                        <MenuItem value={country} key={index}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {errors.country && (
                  <ErrorForm
                    label={errors.country?.message || "Invalid coutry"}
                  />
                )}
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel sx={{ color: "#666666DE" }}>City</InputLabel>
                <Select
                  label="City"
                  {...register("city")}
                  error={!!errors.city}
                  displayEmpty
                  onChange={handleChangeCity}
                  value={selectCity}
                  disabled={selectCountry === "" ? true : false}
                  sx={{
                    color: "#fff",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff",
                      color: "#fff",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FBA403 !important",
                      color: "#fff !important",
                    },
                    "& input": {
                      color: "#fff",
                    },
                    "& label": {
                      color: "secondary.labelColor",
                    },
                  }}
                  id="city"
                  aria-label="Select City"
                >
                  {allCity.map((city, index) => (
                    <MenuItem value={city} key={index}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
                {errors.city && (
                  <ErrorForm label={errors.city?.message || "Invalid city"} />
                )}
              </FormControl>

              <FormControl fullWidth margin="normal">
                <StyledForm
                  label="Referral Code"
                  {...register("referralCode")}
                  error={!!errors.referralCode}
                />
                {errors.referralCode && (
                  <ErrorForm
                    label={errors.referralCode?.message || "Invalid code"}
                  />
                )}
              </FormControl>

              <FormControlLabel
                label="I drive my own car"
                control={
                  <Switch
                    {...register("driveMyOwnCar")}
                    color="primary"
                    checked={carTypeSwitch}
                    onChange={handleOnChangeSwitch}
                  />
                }
                labelPlacement="start"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0 20px 0",
                  color: "#fff",
                  "& .MuiSwitch-switchBase": {
                    "&.Mui-checked": {
                      color: "#fff",
                      "& + .MuiSwitch-track": {
                        opacity: 0.3,
                        backgroundColor: "orange",
                      },
                    },
                  },
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "orange",
                  },
                  "& .MuiFormControlLabel-label": {
                    color: "white",
                  },
                }}
              />

              {carTypeSwitch && (
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#FBA403",
                      fontSize: "20px",
                      fontWeight: "500",
                      marginBottom: "16px",
                    }}
                  >
                    Select your car type
                  </Typography>
                  <RadioGroup
                    aria-label="Select your type car"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                    }}
                  >
                    <p className={styles.inputRadioControl}>
                      <input
                        className={styles.inputCarType}
                        type="radio"
                        id={"sedan"}
                        value={"sedan"}
                        aria-labelledby={"Sedan Car"}
                        {...register("carType")}
                      />
                      <label htmlFor="sedan" className={styles.labelCarType}>
                        <Sedan />
                        <span>Sedan</span>
                      </label>
                    </p>

                    <p className={styles.inputRadioControl}>
                      <input
                        className={styles.inputCarType}
                        type="radio"
                        id={"van"}
                        value={"van"}
                        aria-labelledby={"SUV/Van Car"}
                        {...register("carType")}
                      />
                      <label htmlFor="van" className={styles.labelCarType}>
                        <Van />
                        <span>SUV/Van</span>
                      </label>
                    </p>

                    <p className={styles.inputRadioControl}>
                      <input
                        className={styles.inputCarType}
                        type="radio"
                        id={"semiLuxury"}
                        value={"semiLuxury"}
                        aria-labelledby={"Semi Luxury Car"}
                        {...register("carType")}
                      />
                      <label
                        htmlFor="semiLuxury"
                        className={styles.labelCarType}
                      >
                        <SemiLuxury />
                        <span>Semi Luxury</span>
                      </label>
                    </p>

                    <p className={styles.inputRadioControl}>
                      <input
                        className={styles.inputCarType}
                        type="radio"
                        id={"Luxury"}
                        value={"Luxury"}
                        aria-labelledby={"Luxury Car"}
                        {...register("carType")}
                      />
                      <label htmlFor="Luxury" className={styles.labelCarType}>
                        <Luxury />
                        <span>Luxury</span>
                      </label>
                    </p>
                  </RadioGroup>
                  {errors.carType && (
                    <ErrorForm
                      label={errors.carType?.message || "Select a vehicle type"}
                    />
                  )}
                </Box>
              )}

              <Button
                type="submit"
                variant="contained"
                aria-label="Submit"
                sx={{
                  backgroundColor: "#FBA403 !important",
                  width: "200px",
                  height: "56px",
                  marginTop: "24px",
                }}
                disableElevation
              >
                Submit
              </Button>
            </Box>
          </form>
          )
        </>
      ) : (
        // Renderização da tela de sucesso após o registro
        <SuccessScreen onClick={handleSubmitNewCar} />
      )}
    </>
  );
};

export default DriveForm;
