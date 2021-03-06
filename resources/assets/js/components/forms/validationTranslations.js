import hyperform from 'hyperform';

// Find other translations
// on https://github.com/hyperform/hyperform-l10n/tree/master/dist
export const validationNl = {
  TextTooLong: 'Kort deze tekst in tot %l tekens of minder (u gebruikt nu %l tekens).',
  TextTooShort: 'Gebruik minstens %l tekens (u gebruikt momenteel %l tekens).',
  ValueMissing: 'Vul dit veld in.',
  CheckboxMissing: 'Vink dit vakje aan als u wilt doorgaan.',
  RadioMissing: 'Selecteer een van deze opties.',
  FileMissing: 'Selecteer een bestand.',
  SelectMissing: 'Selecteer een item in de lijst.',
  InvalidEmail: 'Voer een e-mailadres in.',
  InvalidURL: 'Voer een URL in.',
  InvalidDate: 'Voer een geldige datum in.',
  PatternMismatch: 'Gebruik de gevraagde indeling.',
  PatternMismatchWithTitle: 'Gebruik de gevraagde indeling: %l.',
  NumberRangeOverflow: 'Selecteer een waarde die niet hoger is dan %l.',
  DateTimeRangeOverflow: 'Selecteer een waarde die niet later is dan %l.',
  NumberRangeUnderflow: 'Selecteer een waarde die niet lager is dan %l.',
  DateTimeRangeUnderflow: 'Selecteer een waarde die niet vroeger is dan %l.',
  StepMismatch:
    'Selecteer een geldige waarde. De twee dichtstbijzijnde geldige waarden zijn %l en %l.',
  StepMismatchOneValue: 'Selecteer een geldige waarde. De dichtstbijzijnde geldige waarde is %l.',
  BadInputNumber: 'Voer een getal in.',
  'Please match the requested type.': 'Pas de invoer aan aan het vereiste type.',
  'Please comply with all requirements.': 'Voldoe aan alle vereisten.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).':
    'Verleng deze tekst tot ten minste %l tekens (u gebruikt momenteel %l tekens).',
  'Please use the appropriate format.': 'Gebruik de juiste indeling.',
  'Please enter a comma separated list of email addresses.':
    "Voer een door komma's gescheiden lijst van e-mailadressen in.",
  'Please select a file of the correct type.': 'Selecteer een bestand van het juiste type.',
  'Please select one or more files.': 'Selecteer een of meer bestanden.',
  'any value': 'elke waarde',
  'any valid value': 'elke geldige waarde',
};

const validationFr = {
  TextTooLong:
    'Veuillez raccourcir ce champ ?? %l caract??res ou moins (vous utilisez actuellement %l caract??res).',
  TextTooShort:
    'Veuillez utiliser au moins %l caract??res pour ce champ (vous utilisez actuellement %l caract??res).',
  ValueMissing: 'Veuillez compl??ter ce champ.',
  CheckboxMissing: 'Veuillez cocher cette case si vous d??sirez poursuivre.',
  RadioMissing: 'Veuillez s??lectionner l???une de ces options.',
  FileMissing: 'Veuillez s??lectionner un fichier.',
  SelectMissing: 'Veuillez s??lectionner un ??l??ment de la liste.',
  InvalidEmail: 'Veuillez saisir une adresse ??lectronique valide.',
  InvalidURL: 'Veuillez saisir une URL.',
  // InvalidDate:"",
  PatternMismatch: 'Veuillez modifier la valeur pour correspondre au format demand??.',
  PatternMismatchWithTitle:
    'Veuillez modifier la valeur du champ pour correspondre au format demand?? : %l.',
  NumberRangeOverflow: 'Veuillez s??lectionner une valeur inf??rieure ou ??gale ?? %l.',
  DateRangeOverflow: 'Veuillez s??lectionner une valeur ant??rieure ou ??gale ?? %l.',
  TimeRangeOverflow: 'Veuillez s??lectionner une valeur ant??rieure ou ??gale ?? %l.',
  NumberRangeUnderflow: 'Veuillez s??lectionner une valeur sup??rieure ou ??gale ?? %l.',
  DateRangeUnderflow: 'Veuillez s??lectionner une valeur post??rieure ou ??gale ?? %l.',
  TimeRangeUnderflow: 'Veuillez s??lectionner une valeur post??rieure ou ??gale ?? %l.',
  StepMismatch:
    'Veuillez s??lectionner une valeur valide. Les deux valeurs valides les plus proches sont %l et %l.',
  StepMismatchOneValue:
    'Veuillez s??lectionner une valeur valide. La valeur valide la plus proche est %l.',
  BadInputNumber: 'Veuillez saisir un nombre.',
  'Please match the requested type.': 'Veuillez respecter le type de champ demand??.',
  'Please comply with all requirements.': 'Veuillez respecter toutes les conditions.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).':
    "Veuillez allonger ce texte pour atteindre %l caract??res ou plus (vous avez ??crit pour l'instant %l caract??res).",
  'Please use the appropriate format.': 'Veuillez utiliser le format appropri??.',
  'Please enter a comma separated list of email addresses.':
    "Veuillez saisir une liste d'adresses ??lectroniques s??par??es par des virgules.",
  'Please select a file of the correct type.':
    'Veuillez s??lectionner un fichier du type appropri??.',
  'Please select one or more files.': 'Veuillez s??lectionner un ou plusieurs fichiers.',
  'any value': "n'importe quelle valeur",
  'any valid value': "n'importe quelle valeur valide",
};

const validationDe = {
  TextTooLong:
    'Bitte k??rzen Sie diesen Text auf maximal %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  TextTooShort: 'Bitte verwenden Sie zumindest %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  ValueMissing: 'Bitte f??llen Sie dieses Feld aus.',
  CheckboxMissing: 'Bitte klicken Sie dieses K??stchen an, wenn Sie fortsetzen wollen.',
  RadioMissing: 'Bitte w??hlen Sie eine dieser Optionen.',
  FileMissing: 'Bitte w??hlen Sie eine Datei.',
  SelectMissing: 'Bitte w??hlen Sie einen Eintrag in der Liste.',
  InvalidEmail: 'Bitte geben Sie eine E-Mail-Adresse ein.',
  InvalidURL: 'Bitte geben Sie eine Internetadresse ein.',
  // InvalidDate:"",
  PatternMismatch: 'Bitte halten Sie sich an das vorgegebene Format.',
  PatternMismatchWithTitle: 'Bitte halten Sie sich an das vorgegebene Format: %l.',
  NumberRangeOverflow: 'Bitte w??hlen Sie einen Wert, der nicht gr????er ist als %l.',
  DateRangeOverflow: 'Bitte w??hlen Sie einen Wert, der nicht sp??ter ist als %l.',
  TimeRangeOverflow: 'Bitte w??hlen Sie einen Wert, der nicht sp??ter ist als %l.',
  NumberRangeUnderflow: 'Bitte w??hlen Sie einen Wert, der nicht kleiner ist als %l.',
  DateRangeUnderflow: 'Bitte w??hlen Sie einen Wert, der nicht fr??her ist als %l.',
  TimeRangeUnderflow: 'Bitte w??hlen Sie einen Wert, der nicht fr??her ist als %l.',
  StepMismatch:
    'Bitte w??hlen Sie einen g??ltigen Wert. Die zwei n??hesten g??ltigen Werte sind %l und %l.',
  StepMismatchOneValue: 'Bitte w??hlen Sie einen g??ltigen Wert. Der n??heste g??ltige Wert ist %l.',
  BadInputNumber: 'Bitte geben Sie eine Nummer ein.',
  'Please match the requested type.': 'Bitte passen Sie die Eingabe dem geforderten Typ an.',
  'Please comply with all requirements.': 'Bitte erf??llen Sie alle Anforderungen.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).':
    'Bitte verl??ngern Sie diesen Text auf mindestens %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  'Please use the appropriate format.': 'Bitte verwenden Sie das passende Format.',
  'Please enter a comma separated list of email addresses.':
    'Bitte geben Sie eine komma-getrennte Liste von E-Mail-Adressen an.',
  'Please select a file of the correct type.': 'Bitte w??hlen Sie eine Datei vom korrekten Typ.',
  'Please select one or more files.': 'Bitte w??hlen Sie eine oder mehrere Dateien.',
  'any value': 'jeder Wert',
  'any valid value': 'jeder g??ltige Wert',
};

export const setHyperformLang = () => {
  const { lang } = document.documentElement;

  if (lang === 'nl') {
    hyperform.addTranslation(lang, validationNl);
    hyperform.setLanguage(lang);
  } else if (lang === 'fr') {
    hyperform.addTranslation(lang, validationFr);
    hyperform.setLanguage(lang);
  } else if (lang === 'de') {
    hyperform.addTranslation(lang, validationDe);
    hyperform.setLanguage(lang);
  }
};
