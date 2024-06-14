import { GENEROS } from "@/constants/generos";
import { useSaveFilme } from "@/hooks/useSaveFilme";
import Filme from "@/interfaces/Filme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Toggle } from "./ui/toggle";

const FilmeFormSchema = z.object({
  id: z.string().optional(),
  titulo: z.string(),
  ano: z.number(),
  duracaoEmMinutos: z.number(),
  genero: z.array(z.string()),
  diretor: z.string(),
  roteiristas: z.array(z.string()),
  atores: z.array(z.string()),
  poster: z.string(),
  metascore: z.number(),
  videoUrl: z.string().optional(),
  category: z.string(),
});

export type FilmeFormSchemaType = z.infer<typeof FilmeFormSchema>;

type FilmeFormProps = {
  actualFilme?: Filme;
}

const FilmeForm: React.FC<FilmeFormProps> = ({actualFilme}) => {

  const {mutate} = useSaveFilme();

  console.log(actualFilme);

  const FilmeForm = useForm<FilmeFormSchemaType>({
    resolver: zodResolver(FilmeFormSchema),
    defaultValues: {
      id: actualFilme?.id ? actualFilme.id : undefined,
      titulo: actualFilme?.titulo ? actualFilme.titulo : '',
      duracaoEmMinutos: actualFilme?.duracaoEmMinutos ? actualFilme.duracaoEmMinutos : 0,
      ano: actualFilme?.ano ? actualFilme.ano : 0,
      diretor: actualFilme?.diretor ? actualFilme.diretor : '',
      poster: actualFilme?.poster ? actualFilme.poster : '',
      category:  actualFilme?.category ? actualFilme.category : '',
      metascore: actualFilme?.metascore ? actualFilme.metascore : 0,
      genero: actualFilme?.genero ? actualFilme.genero : [],
      roteiristas: actualFilme?.roteiristas ? actualFilme.roteiristas : [],
      atores: actualFilme?.atores ? actualFilme.atores : [],
    },
  });

  const [atorInput, setAtorInput] = useState("");
  const [roteiristaInput, setRoteiristaInput] = useState("");

  const { getValues, setValue, handleSubmit } = FilmeForm;

  const handleGeneroClick = (genero: string) => {
    if (getValues().genero.includes(genero)) {
      setValue(
        "genero",
        getValues().genero.filter((g) => g !== genero)
      );
    } else {
      setValue("genero", [...getValues().genero, genero]);
    }
  };

  const handleAddRoteirista = () => {
    setValue("roteiristas", [...getValues().roteiristas, roteiristaInput]);
    setRoteiristaInput("");
  }

  const handleAddAtor = () => {
    setValue("atores", [...getValues().atores, atorInput]);
    setAtorInput("");
  }

  const onSubmit = (data: FilmeFormSchemaType) => {
    mutate(data as Filme);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleNumberChange<TField extends keyof FilmeFormSchemaType>(e: React.ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<FilmeFormSchemaType, TField>){
    if(e.target.value === "0"){
      field.onChange("");
      return;
    }
    field.onChange(Number(e.target.value));
  }

  return (
    <Form {...FilmeForm}>
      <form onSubmit={handleSubmit(onSubmit, (err) => console.log(err))} className="h-[98.5%] w-full flex justify-center overflow-auto p-2">
        <div className="p-1 flex flex-col gap-4 w-[100%]">
          <div className="flex justify-between">
            <FormField
              control={FilmeForm.control}
              name="titulo"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <FormField
              control={FilmeForm.control}
              name="duracaoEmMinutos"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Duração em minutos</FormLabel>
                  <FormControl>
                    <Input {...field} onChange={e => handleNumberChange(e, field)} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={FilmeForm.control}
              name="ano"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Ano</FormLabel>
                  <FormControl>
                    <Input {...field} onChange={e => handleNumberChange(e, field)} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormLabel>Genero</FormLabel>
          <div className="w-full border flex p-1 flex-wrap justify-center gap-2 rounded-lg">
            {GENEROS.map((genero, index) => (
              <Toggle
                defaultPressed={getValues().genero.includes(genero)}
                onClick={() => handleGeneroClick(genero)}
                key={index}
              >
                <span>{genero}</span>
              </Toggle>
            ))}
          </div>
          <div className="flex justify-between">
            <FormField
              control={FilmeForm.control}
              name="diretor"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Diretor</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <div className="w-[45%] flex flex-col gap-2">
              <FormItem className="w-full">
                <FormLabel>Roteiristas</FormLabel>
                <FormControl>
                  <div className="flex relative justify-between gap-2">
                    <Input value={roteiristaInput} onChange={e => setRoteiristaInput(e.target.value)} />
                    <Button
                      className="h-full w-[3rem] border-none rounded-full"
                      variant={"outline"}
                      type="button"
                      onClick={() => handleAddRoteirista()}
                    >
                      <Plus size={20} />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
              <ScrollArea className="w-[86%] h-full rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">
                    Roteiristas
                  </h4>
                  {getValues().roteiristas.map((roteirista, index) => (
                    <>
                      <div key={`${roteirista}-${index}`} className="text-sm">
                        {roteirista}
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="w-[45%] flex flex-col gap-2">
              <FormItem className="w-full">
                <FormLabel>Atores</FormLabel>
                <FormControl>
                  <div className="flex relative justify-between gap-2">
                    <Input value={atorInput} onChange={e => setAtorInput(e.target.value)} />
                    <Button
                      className="h-full w-[3rem] border-none rounded-full"
                      variant={"outline"}
                      type="button"
                      onClick={() => handleAddAtor()}
                    >
                      <Plus size={20} />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
              <ScrollArea className="w-[86%] h-full rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">
                    Atores
                  </h4>
                  {getValues().atores.map((ator, index) => (
                    <>
                      <div key={`${index}${ator}`} className="text-sm">
                        {ator}
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
          <div className="flex justify-between">
            <FormField
              control={FilmeForm.control}
              name="poster"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormLabel>Poster (URL)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <FormField
              control={FilmeForm.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={FilmeForm.control}
              name="metascore"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Metascore</FormLabel>
                  <FormControl>
                    <Input {...field} onChange={e => handleNumberChange(e, field)}  type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end mt-4">
            <Button className="w-[20%]" type="submit">Salvar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FilmeForm;
