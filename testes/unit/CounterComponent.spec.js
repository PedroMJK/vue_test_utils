// tests/unit/Counter.spec.js
import { mount } from '@vue/test-utils'; // Importa a função `mount` do Vue Test Utils para montar o componente
import Counter from '@/components/CounterComponent.vue'; // Importa o componente CounterComponent para teste

// Define uma suíte de testes para o componente Counter.vue
describe('Counter.vue', () => {
  
  // Teste que verifica se o contador inicial é zero
  it('exibe o valor inicial do contador como zero', () => {
    const wrapper = mount(Counter); // Monta o componente Counter
    // Verifica se o valor exibido no elemento com o seletor [data-testid="counter-value"] é 'Contador: 0'
    expect(wrapper.find('[data-testid="counter-value"]').text()).toBe('Contador: 0');
  });

  // Teste que verifica o incremento do contador ao clicar no botão "Incrementar"
  it('incrementa o contador ao clicar no botão "Incrementar"', async () => {
    const wrapper = mount(Counter); // Monta o componente Counter
    // Simula um clique no primeiro botão (Incrementar)
    await wrapper.find('button').trigger('click');
    // Verifica se o valor exibido é 'Contador: 1'
    expect(wrapper.find('[data-testid="counter-value"]').text()).toBe('Contador: 1');
  });

  // Teste que verifica o decremento do contador ao clicar no botão "Decrementar"
  it('decrementa o contador ao clicar no botão "Decrementar"', async () => {
    const wrapper = mount(Counter); // Monta o componente Counter
    // Simula um clique no segundo botão (Decrementar)
    await wrapper.findAll('button')[1].trigger('click');
    // Verifica se o valor exibido é 'Contador: -1'
    expect(wrapper.find('[data-testid="counter-value"]').text()).toBe('Contador: -1');
  });
});
