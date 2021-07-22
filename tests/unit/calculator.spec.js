import { mount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";

describe("Calculator.vue", () => {
  test("Verify sum of 2 numbers", async () => {
    const wrapper = mount(Calculator);
    const calculateButton = wrapper.find("button.btn-calculate");

    const firstNumber = 10;
    const secondNumber = 15;

    await wrapper.setData({ firstNumber });
    await wrapper.setData({ secondNumber });

    await calculateButton.trigger("click");
    const result = wrapper.find("p.result");

    expect(result.text()).toContain("Result: 25");
  });
});
