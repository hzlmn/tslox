import { Token } from './Token'
import { TokenType } from './TokenType'

export class Scanner {
  private source: string
  private length: number

  private tokens: Array<Token> = []

  private current: number = 0
  private start: number = 0
  private line: number = 1

  constructor(source) {
    this.source = source
    this.length = source.length
  }

  private atTheEnd(): boolean {
    return this.current >= this.length
  }

  public scanTokens(): Array<Token> {
    while (!this.atTheEnd()) {
      this.start = this.current
      this.scanTokens()
    }

    return this.tokens
  }
}
