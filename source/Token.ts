import {TokenType} from './TokenType'

export class Token {
  type: TokenType
  lexem: string
  literal: object
  line: number

  constructor (type: TokenType, lexem: string, literal: object, line: number) {
    this.type = type
    this.lexem = lexem
    this.literal = literal
    this.line = line
  }

  public toString(): string {
    return this.type + ' ' + this.lexem + ' ' + this.literal
  }
}
