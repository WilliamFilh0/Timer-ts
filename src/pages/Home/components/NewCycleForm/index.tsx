import { useContext } from "react";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles.ts";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext.tsx";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="De um nome pro seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      ></TaskInput>

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );

  return;
}
