<form id="form-contact" action="#" method="post" class="validate">
  
  <div class="input-group">
    <label for="select">Ik heb een vraag over</label>
    <select id="select" name="select">
      <option value="">Selecteer onderwerp</option>
      <option value="Optie 1">Verkoop camper</option>
    </select>
  </div>
  <div class="input-group">
    <label for="message">Je bericht of vraag <span class="required">*</span></label>
    <textarea name="message" id="message" placeholder="Shoot!" required></textarea>
  </div>

  <div class="grid">
    <div class="grid__item one-half">
      <div class="input-group">
        <label for="name">Naam <span class="required">*</span></label>
        <input type="text" name="name" id="name" placeholder="Naam" required />
      </div>
    </div>
    <div class="grid__item one-half">
      <div class="input-group">
        <label for="email">E-mail <span class="required">*</span></label>
        <input type="email" name="email" id="email" placeholder="Email" required />
      </div>    
    </div>
  </div>

  <div class="button-group">
    <input type="submit" value="Verzenden" class="button"/>
  </div>
</form>
