import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MyComponent from './MyComponent.vue'

describe('<MyComponent />', () => {
  test('Shows initial full name', () => {
    const inputValue = 'John Doe'

    render(MyComponent, {
      props: {
        modelValue: inputValue,
      },
    })

    const input = screen.getByRole('textbox')

    expect(input).toHaveValue(inputValue)
  })

  test('Emits "save" event with entered full name', async () => {
    const { emitted } = render(MyComponent)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: 'Save' })

    await userEvent.type(input, 'John Doe')
    await userEvent.click(button)

    const saveEvents = emitted().save ?? []

    expect(saveEvents).toBeTruthy()
    expect(saveEvents[0]).toEqual(['John Doe'])
  })
})
