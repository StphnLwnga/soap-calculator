// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, HttpErrors, param} from '@loopback/rest';
import {
  AddResponse, Calculator,
  CalculatorParameters,
  DivideResponse, MultiplyResponse,
  SubtractResponse
} from '../services/calculator.service';


export class CalculatorController {
  constructor(
    @inject('services.Calculator')
    protected calculatorService: Calculator,
  ) {}

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: Number,
    @param.path.integer('intB') intB: Number
  ): Promise<AddResponse> {
    return this.calculatorService.add(<CalculatorParameters>{
      intA,
      intB
    });
  }

  @get('/divide/{intA}/{intB}')
  async divide(
    @param.path.integer('intA') intA: Number,
    @param.path.integer('intB') intB: Number
  ): Promise<DivideResponse> {
    if (intB === 0) {
      throw new HttpErrors.PreconditionFailed('Cannot divide by 0');
    }
    return this.calculatorService.divide(<CalculatorParameters>{
      intA,
      intB,
    });
  }

  @get('/multiply/{intA}/{intB}')
  async multiply(
    @param.path.integer('intA') intA: Number,
    @param.path.integer('intB') intB: Number
  ): Promise<MultiplyResponse> {
    return this.calculatorService.multiply(<CalculatorParameters>{
      intA,
      intB,
    })
  }

  @get('/subtract/{intA}/{intB}')
  async subtract(
    @param.path.integer('intA') intA: Number,
    @param.path.integer('intB') intB: Number
  ): Promise<SubtractResponse> {
    return this.calculatorService.subtract(<CalculatorParameters>{
      intA,
      intB,
    });
  }
}
