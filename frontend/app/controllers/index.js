import Controller from '@ember/controller'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'

export default class IndexController extends Controller {
  @service session

  @action
  async handleAdd(event) {
    event.preventDefault()
    let link = this.store.createRecord('bookmark', { url: this.url })
    this.resetForm()
    await link.save()
  }

  resetForm() {
    this.set('url', '')
  }
}
