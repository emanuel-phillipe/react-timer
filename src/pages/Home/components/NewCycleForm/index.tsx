import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CycleContexts'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="taskSuggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="taskSuggestions">
        <option value="Projeto 1" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmout">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmout"
        placeholder="00"
        step={5}
        min={5}
        max={90}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
