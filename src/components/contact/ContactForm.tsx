"use client";

import { useForm as useFormspree } from "@formspree/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";

const inputsSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1).email(),
    message: z.string().min(1),
});

type Inputs = z.infer<typeof inputsSchema>;

function ContactForm() {
    const [sent, setSent] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (sent) {
            timer = setTimeout(() => {
                setSent(false);
            }, 5000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [sent]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(inputsSchema),
        mode: "onChange", // Esto validará el campo mientras el usuario escribe
    });

    const [state, submit] = useFormspree("xldrdnyk");

    const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
        try {
            await submit(inputs); // Ya no intentamos acceder a result.ok
            setSent(true);
            reset();
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    };

    return (
        <FormControl
            style={{ width: "1000px" }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col space-y-6"
            autoComplete="off"
            noValidate>
            <TextField
                id="contact-name"
                label="Nombre"
                placeholder="Jhon Doe"
                fullWidth
                error={!!errors.name}
                helperText={errors.name ? "Asegúrese de que este campo es válido" : ""}
                {...register("name")}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                            borderColor: "rgba(253, 224, 71, 0.5)",
                        },
                        "&:hover fieldset": {
                            borderColor: "var(--primary)",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "white",
                    },
                }}
            />
            <TextField
                id="contact-email"
                label="Email"
                type="email"
                placeholder="example@example.com"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? "Asegúrese de que este campo es válido" : ""}
                {...register("email")}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                            borderColor: "rgba(253, 224, 71, 0.5)",
                        },
                        "&:hover fieldset": {
                            borderColor: "var(--primary)",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "white",
                    },
                }}
            />
            <TextField
                id="contact-message"
                label="Mensaje"
                placeholder="Escriba su mensaje"
                multiline
                rows={4}
                fullWidth
                error={!!errors.message}
                helperText={errors.message ? "Asegúrese de que este campo es válido" : ""}
                {...register("message")}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                            borderColor: "rgba(253, 224, 71, 0.5)",
                        },
                        "&:hover fieldset": {
                            borderColor: "var(--primary)",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "white",
                    },
                }}
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    background: "linear-gradient(45deg, rgba(253, 224, 71, 0.5), var(--primary))",
                    transition: "all 0.3s",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px var(--primary-light)",
                    },
                    padding: "12px",
                    fontSize: "1rem",
                    textTransform: "none",
                }}>
                Enviar
            </Button>
            {sent ? <p className="text-green-400">Mensaje enviado con éxito</p> : null}
        </FormControl>
    );
}

export default ContactForm;
