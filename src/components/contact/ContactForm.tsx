"use client";

import { useForm as useFormspree } from "@formspree/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import { useTranslations } from "next-intl";

const inputsSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1).email(),
    message: z.string().min(1),
});

type Inputs = z.infer<typeof inputsSchema>;

function ContactForm() {
    const t = useTranslations("contact.form");
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
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col space-y-6"
            autoComplete="off"
            noValidate>
            <TextField
                id="contact-name"
                label={t("name")}
                placeholder={t("namePlaceholder")}
                fullWidth
                error={!!errors.name}
                helperText={errors.name ? t("error") : ""}
                {...register("name")}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                            borderColor: "rgba(253, 224, 71, 0.5)", // --primary con opacidad
                        },
                        "&:hover fieldset": {
                            borderColor: "var(--primary)",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "var(--primary)",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                            color: "var(--primary)", // Utilizará el color amarillo definido en globals.css
                        },
                    },
                    "& .MuiFormHelperText-root": {
                        color: "var(--primary)",
                    },
                }}
            />
            <TextField
                id="contact-email"
                label={t("email")}
                type="email"
                placeholder={t("emailPlaceholder")}
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? t("error") : ""}
                {...register("email")}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                            borderColor: "rgba(253, 224, 71, 0.5)", // --primary con opacidad
                        },
                        "&:hover fieldset": {
                            borderColor: "var(--primary)",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "var(--primary)",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                            color: "var(--primary)", // Utilizará el color amarillo definido en globals.css
                        },
                    },
                    "& .MuiFormHelperText-root": {
                        color: "var(--primary)",
                    },
                }}
            />
            <TextField
                id="contact-message"
                label={t("message")}
                placeholder={t("messagePlaceholder")}
                multiline
                rows={4}
                fullWidth
                error={!!errors.message}
                helperText={errors.message ? t("error") : ""}
                {...register("message")}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": {
                            borderColor: "rgba(253, 224, 71, 0.5)", // --primary con opacidad
                        },
                        "&:hover fieldset": {
                            borderColor: "var(--primary)",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "var(--primary)",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                            color: "var(--primary)", // Utilizará el color amarillo definido en globals.css
                        },
                    },
                    "& .MuiFormHelperText-root": {
                        color: "var(--primary)",
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
                {t("button")}
            </Button>
            {sent ? <p className="text-green-400">{t("success")}</p> : null}
        </FormControl>
    );
}

export default ContactForm;
