import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  submit() {
    // セットされているTimeoutをクリアする
    clearTimeout(this.timeout)

    // Timeoutをセットする
    // 200ms後にリクエストを実行する
    // 連続で実行されるとTimeoutはクリアされるため、最後の処理だけしか実行されない
    // submit()だと直でフォームの内容をリクエストするので、インターセプトできないためrequestSubmit()を使う
    this.timeout = setTimeout(() => {
      this.element.requestSubmit()
    }, 200)
  }
}