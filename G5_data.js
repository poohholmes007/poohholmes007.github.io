const G5_alphabets = [
    {'alphabet': {value: 'zz', status: '', options: ['t', 's', 'zz'], student: 'zz', category: 'C'}},
    {'alphabet': {value: 'f', status: '', options: ['f', 'p', 'v'], student: 'f', category: 'C'}},
    {'alphabet': {value: 's', status: '', options: ['z', 't', 's'], student: 's', category: 'C'}},
    {'alphabet': {value: 'z', status: '', options: ['t', 'z', 's'], student: 'z', category: 'C'}},
    {'alphabet': {value: 'm', status: '', options: ['m', 'n'], student: 'm', category: 'C'}},
    {'alphabet': {value: 'n', status: '', options: ['n', 'm'], student: 'n', category: 'C'}},
    {'alphabet': {value: 'm', status: '', options: ['n', 'm'], student: 'm', category: 'C'}},
    {'alphabet': {value: 'n', status: '', options: ['m', 'n'], student: 'n', category: 'C'}},
    {'alphabet': {value: 'x', status: '', options: ['k', 'x'], student: 'x', category: 'C'}},
    {'alphabet': {value: 'x', status: '', options: ['x', ' k'], student: 'x', category: 'C'}},
    {'alphabet': {value: 'ch', status: '', options: ['sh', 'wh', 'ch'], student: 'ch', category: 'C'}},
    {'alphabet': {value: 'ph', status: '', options: ['ph', 'ch', 'wh'], student: 'ph', category: 'C'}},
    {'alphabet': {value: 'th', status: '', options: ['wh', 'th', 'ch'], student: 'th', category: 'C'}},
    {'alphabet': {value: 'sh', status: '', options: ['sh', 'ch', 'wh'], student: 'sh', category: 'C'}},
    {'alphabet': {value: 'ng', status: '', options: ['ck', 'th', 'ng'], student: 'ng', category: 'C'}},
    {'alphabet': {value: 'ck', status: '', options: ['ch', 'ck', 'ng'], student: 'ck', category: 'C'}},
    {'alphabet': {value: 'wh', status: '', options: ['wh', 'ph', 'th'], student: 'wh', category: 'C'}},
    {'alphabet': {value: 'ph', status: '', options: ['wh', 'ph', 'sh'], student: 'ph', category: 'C'}},
    {'alphabet': {value: 'ng', status: '', options: ['ng', 'ck', 'ch'], student: 'ng', category: 'C'}},
    {'alphabet': {value: 'th', status: '', options: ['th', 'wh', 'sh'], student: 'th', category: 'C'}},
    {'alphabet': {value: 'sh', status: '', options: ['ch', 'th', 'sh'], student: 'sh', category: 'C'}},
    {'alphabet': {value: 'wh', status: '', options: ['ph', 'th', 'wh'], student: 'wh', category: 'C'}},
    {'alphabet': {value: 'ch', status: '', options: ['sh', 'ch', 'th'], student: 'ch', category: 'C'}},
    {'alphabet': {value: 'ck', status: '', options: ['ck', 'wh', 'ch'], student: 'ck', category: 'C'}},
    {'alphabet': {value: 'ea', status: '', options: ['ea', 'ue'], student: 'ea', category: 'V'}},
    {'alphabet': {value: 'oe', status: '', options: ['ee', 'oe'], student: 'oe', category: 'V'}},
    {'alphabet': {value: 'ie', status: '', options: ['ie', 'oe'], student: 'ie', category: 'V'}},
    {'alphabet': {value: 'ai', status: '', options: ['ai', 'oe'], student: 'ai', category: 'V'}},
    {'alphabet': {value: 'ui', status: '', options: ['ui', 'ow'], student: 'ui', category: 'V'}},
    {'alphabet': {value: 'ee', status: '', options: ['oa', 'ee'], student: 'ee', category: 'V'}},
    {'alphabet': {value: 'ie', status: '', options: ['ui', 'ie'], student: 'ie', category: 'V'}},
    {'alphabet': {value: 'oa', status: '', options: ['ai', 'oa'], student: 'oa', category: 'V'}},
    {'alphabet': {value: 'ay', status: '', options: ['ie', 'ay'], student: 'ay', category: 'V'}},
    {'alphabet': {value: 'ue', status: '', options: ['oe', 'ue'], student: 'ue', category: 'V'}},
    {'alphabet': {value: 'ey', status: '', options: ['ui', 'ey'], student: 'ey', category: 'V'}},
    {'alphabet': {value: 'ow', status: '', options: ['ow', 'ui'], student: 'ow', category: 'V'}},
    {'alphabet': {value: 'wh', status: '', options: ['ph', 'sh', 'wh'], student: 'wh', category: 'C'}},
    {'alphabet': {value: 'ph', status: '', options: ['ph', 'wh', 'ch'], student: 'ph', category: 'C'}},
    {'alphabet': {value: 'ch', status: '', options: ['sh', 'th', 'ch'], student: 'ch', category: 'C'}},
    {'alphabet': {value: 'sh', status: '', options: ['ch', 'wh', 'sh'], student: 'sh', category: 'C'}},
    {'alphabet': {value: 'ph', status: '', options: ['wh', 'ph', 'sh'], student: 'ph', category: 'C'}},
    {'alphabet': {value: 'th', status: '', options: ['ph', 'th', 'ch'], student: 'th', category: 'C'}},
    {'alphabet': {value: 'sh', status: '', options: ['sh', 'ch', 'wh'], student: 'sh', category: 'C'}},
    {'alphabet': {value: 'ch', status: '', options: ['th', 'ch', 'sh'], student: 'ch', category: 'C'}},
    {'alphabet': {value: 'th', status: '', options: ['th', 'ph', 'sh'], student: 'th', category: 'C'}},
    {'alphabet': {value: 'wh', status: '', options: ['wh', 'ph', 'sh'], student: 'wh', category: 'C'}},
    {'alphabet': {value: 'ck', status: '', options: ['ch', 'ng', 'ck'], student: 'ck', category: 'C'}},
    {'alphabet': {value: 'ch', status: '', options: ['sh', 'ch', 'wh'], student: 'ch', category: 'C'}},
    {'alphabet': {value: 'sh', status: '', options: ['sh', 'ch', 'th'], student: 'sh', category: 'C'}},
    {'alphabet': {value: 'th', status: '', options: ['th', 'sh', 'wh'], student: 'th', category: 'C'}},
    {'alphabet': {value: 'ch', status: '', options: ['sh', 'wh', 'ch'], student: 'ch', category: 'C'}},
    {'alphabet': {value: 'ng', status: '', options: ['th', 'ng', 'ck'], student: 'ng', category: 'C'}},
    {'alphabet': {value: 'th', status: '', options: ['wh', 'th', 'sh'], student: 'th', category: 'C'}},
    {'alphabet': {value: 'sh', status: '', options: ['th', 'ch', 'sh'], student: 'sh', category: 'C'}},
    {'alphabet': {value: 'ng', status: '', options: ['ng', 'ck', 'th'], student: 'ng', category: 'C'}},
    {'alphabet': {value: 'ck', status: '', options: ['ck', 'ch', 'ng'], student: 'ck', category: 'C'}},
    {'alphabet': {value: 'ie', status: '', options: ['oe', 'ie'], student: 'ie', category: 'V'}},
    {'alphabet': {value: 'ay', status: '', options: ['ay', 'ow'], student: 'ay', category: 'V'}},
    {'alphabet': {value: 'ea', status: '', options: ['ea', 'ue'], student: 'ea', category: 'V'}},
    {'alphabet': {value: 'oe', status: '', options: ['oe', 'ie'], student: 'oe', category: 'V'}},
    {'alphabet': {value: 'oa', status: '', options: ['oa', 'ai'], student: 'oa', category: 'V'}},
    {'alphabet': {value: 'ui', status: '', options: ['ui', 'ow'], student: 'ui', category: 'V'}},
    {'alphabet': {value: 'ai', status: '', options: ['ai', 'ie'], student: 'ai', category: 'V'}},
    {'alphabet': {value: 'ie', status: '', options: ['ui', 'ie'], student: 'ie', category: 'V'}},
    {'alphabet': {value: 'ue', status: '', options: ['oe', 'ue'], student: 'ue', category: 'V'}},
    {'alphabet': {value: 'ee', status: '', options: ['oa', 'ee'], student: 'ee', category: 'V'}},
];
