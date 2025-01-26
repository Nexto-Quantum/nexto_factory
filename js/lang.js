var arrLang = {
    'en': {
        'SiteTitle': 'Token Factory-Issuing your own token on the Ethereum with One-Click',
        'typeOfToken': 'Type OF Token',
        'Fix Token': 'ERC20 Fixed Amount Token',
        'Burnable Token': 'ERC20 Burnable Token',
        'Mintable Token': 'ERC20 Mintable Token',
        'Pausable Token': 'ERC20 Pausable Token',
        'Full Function Token': 'ERC20 Multi Function Token',
        'FlashMint Token': 'ERC20 FlashMint Token',
        'Permit Token': 'Permit Token',
        'Votes Token': 'Votes Token',
        'Name': 'Token Name(For example: Tesla)',
        'Symbol': 'Token Symbol(For example: TSLA)',
        'Decimals': 'Decimals(If you don’t know what this is, please fill in: 18)',
        'SupplyAmount': 'Supply Amount(For example: 10000000)',
        'InitSupplyAmount': 'Init Supply Amount(For example: 2000000000000)',
        'AdminAddress': 'Administrator Address',
        'FixedDesKey': 'You can issue a fixed amount of erc20 tokens with one-click.',
        'BurnableDesKey':'You can issue a destroyable erc20 token with one-click',
        'MintableDesKey':'You can issue mintable erc20 tokens with one-click, and mint tokens for specified addresses at any time.',
        'PausableDesKey':'You can one-click to issue erc20 tokens that can be suspended.',
        'MultiFunctionDesKey':'You can one-click to issue erc20 tokens that can be suspended, minted, and can be destroyed.',
        'FlashMintDesKey':"Built-in flash loans. Lend tokens without requiring collateral as long as they're returned in the same transaction.",
        'PermitDesKey':"Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account.",
        'VotesDesKey':"Without paying gas, token holders will be able to allow third parties to transfer from their account.",
        'FormTipsKey':'Please fill the form completely'
    },
    'zh-CN': {
        'SiteTitle': '代币工厂 - 在以太坊或类似以太坊区块链上一键发行您自己的代币',
        'typeOfToken': '代币类型',
        'Fix Token': 'ERC20固定总量代币',
        'Burnable Token':  'ERC20可销毁代币',
        'Mintable Token': 'ERC20可增发代币',
        'Pausable Token': 'ERC20可暂停代币',
        'Full Function Token': '全功能代币',
        'FlashMint Token': '闪电贷代币',
        'Permit Token': 'Permit Token',
        'Votes Token': '投票代币',
        'ERC721Full': 'ERC721代币',
        'Name': '代币名称(比如：Tesla)',
        'Symbol': '代币符号(比如：Tsla)',
        'Decimals': '小数点位数(如果您不清楚这个意思，请填写：18)',
        'SupplyAmount': '供应总量(代币总数)',
        'InitSupplyAmount': '初始供应总量',
        'Cap': '上限数量',
        'AdminAddress': '管理员地址',
        'FixedDesKey': '您可以一键发行固定数量的erc20代币。',
        'BurnableDesKey':'您可以一键发行可销毁的erc20代币。',
        'MintableDesKey':'您可以一键发行可铸造的 erc20 代币，并可以随时为指定地址铸造代币。',
        'PausableDesKey':'可以一键发行可暂停的erc20代币。',
        'CappedDesKey':'您可以一键发行有限数量的 erc20 代币。',
        'MultiFunctionDesKey':'可以一键发行可以暂停、铸造、可以销毁的erc20代币。',
        'FlashMintDesKey':"内置闪电贷。借出代币无需抵押，只要它们在同一交易中归还即可。",
        'PermitDesKey':"跟踪链上治理中投票的历史余额，并通过一种方式将一个人的投票权委托给一个受信任的账户。",
        'VotesDesKey':"无需支付gas，代币持有者将能够允许第三方从他们的账户中转账。",
        'FormTipsKey':'请将表单填写完整.'
    },

    'ru': {
        'SiteTitle': 'Token Factory - выпуск вашего собственного токена в Ethereum в один клик',
        'typeOfToken': 'Тип токена',
        'Fixed': 'Токен фиксированной суммы ERC20',
        'Burnable': 'ERC20 сжигаемый токен',
        'Mintable': 'ERC20 Mintable Token',
        'Pausable': 'ERC20 Pausable токен',
        'Capped': 'Токен с ограничением ERC20',
        'ERC20Multi': 'Многофункциональный токен ERC20',
        'Name': 'Имя токена (например: Tesla)',
        'Symbol': 'Символ токена (например: TSLA)',
        'Decimals': 'Десятичные числа (если вы не знаете, что это такое, введите: 18)',
        'SupplyAmount': 'Сумма поставки (например: 10000000)',
        'InitSupplyAmount': 'Начальная сумма поставки (например: 2000000000000)',
        'Cap': 'Кепка (например: 2000000000000)',
        'AdminAddress': 'Админ-адрес',
        'FixedDesKey': 'Вы можете выпустить фиксированное количество токенов erc20 одним щелчком мыши.',
        'BurnableDesKey':'Вы можете выпустить уничтожаемый токен erc20 одним щелчком мыши',
        'MintableDesKey':'Вы можете выпускать mintable токены erc20 одним щелчком мыши и mint токены для указанных адресов в любое время.',
        'PausableDesKey':'Вы можете одним щелчком мыши выпустить токены erc20, действие которых может быть приостановлено.',
        'CappedDesKey':'Вы можете выпустить ограниченное количество токенов erc20 одним щелчком мыши.',
        'MultiFunctionDesKey':'Вы можете одним щелчком мыши выпустить токены erc20, которые могут быть приостановлены, отчеканены, имеют верхний предел и могут быть уничтожены.',
        'FormTipsKey':'Пожалуйста, заполните форму полностью'
    },


    'ko': {
        'SiteTitle'             :   '토큰팩토리-원클릭으로 이더리움에서 나만의 토큰 발행',
        'typeOfToken'           :   '토큰의 종류',
        'Fix Token'             :   'ERC20 고정금액 토큰',
        'Burnable Token'        :   'ERC20 가연성 토큰',
        'Mintable Token'        :   'ERC20 Mintable Token',
        'Pausable Token'        :   'ERC20 일시 정지 토큰',
        'Full Function Token'   :   'ERC20 다기능 토큰',
        'FlashMint Token'       :   '플래시 민트 토큰',
        'Permit Token'          :   '허가 토큰',
        'Votes Token'           :   '투표 토큰',
        'Name'                  :   '토큰 이름(예: Tesla)',
        'Symbol'                :   '토큰 심볼(예: TSLA)',
        'SupplyAmount'          :   '소수점(이것이 무엇인지 모를 경우 18번을 입력하세요.)',
        'InitSupplyAmount'      :   '공급량(예: 10000000)',
        'AdminAddress'          :   '초기 공급량(예: 2000000000000)',
        'FixedDesKey'           :   '관리자 주소',
        'BurnableDesKey'        :   '원클릭으로 일정량의 erc20 토큰을 발행할 수 있습니다.',
        'MintableDesKey'        :   '원클릭으로 파괴 가능한 erc20 토큰 발행 가능',
        'PausableDesKey'        :   '원클릭으로 발행 가능한 erc20 토큰을 발행할 수 있으며, 지정된 주소에 대해서는 언제든지 발행 가능한 토큰을 발행할 수 있습니다.',
        'MultiFunctionDesKey'   :   '원클릭으로 일시 정지 가능한 erc20 토큰을 발행할 수 있습니다.',
        'FlashMintDesKey'       :   '클릭 한 번으로 정지, 발행 및 폐기 가능한 erc20 토큰을 발행할 수 있습니다.',
        'PermitDesKey'          :   "내장 플래시 대출. 동일한 거래에서 반환되는 한 담보 없이 토큰을 빌려줍니다.",
        'VotesDesKey'           :   "투표권을 신뢰할 수 있는 계정에 위임하는 방법을 사용하여 온체인 거버넌스에서 투표를 위한 역사적 잔고를 추적합니다.",
        'FormTipsKey'           :   '양식을 완전히 작성해 주세요'
    },
    'fa': {
        'SiteTitle'             : 'کارخانه توکن-ارسال توکن خود در اتریوم با یک کلیک',
        'typeOfToken'           : 'نوع رمز',
        'Fix Token'             :'Token مقدار ثابت ERC20',
        'Burnable Token'        :'ERC20 Burnable Token',
        'Mintable Token'        :'ERC20 Mintable Token',
        'Pausable Token'        :'ERC20 Pausable Token',
        'Full Function Token'   :'ژتون چند کاره ERC20',
        'FlashMint Token'       :'Token Flash Mint',
        'Permit Token'          :'ژتون مجوز',
        'Votes Token'           :'رمز رای',
        'Name'                  :'نام رمز (به عنوان مثال: تسلا)',
        'Symbol'                :'نماد نشانه (به عنوان مثال: TSLA)',
        'SupplyAmount'          :'مقدار عرضه (به عنوان مثال: 10000000)',
        'InitSupplyAmount'      :'مقدار عرضه اولیه (به عنوان مثال: 2000000000000)',
        'AdminAddress'          :'آدرس مدیر',
        'FixedDesKey'           :'شما می توانید مقدار ثابتی از توکن های erc20 را با یک کلیک صادر کنید.',
        'BurnableDesKey'        :'شما می توانید یک توکن erc20 قابل تخریب را با یک کلیک صادر کنید',
        'MintableDesKey'        :'شما می توانید توکن های erc20 قابل mintable را با یک کلیک صادر کنید، و در هر زمان برای آدرس های مشخص شده، توکن های برش را صادر کنید.',
        'PausableDesKey'        :'برای صدور توکن‌های erc20 که قابل تعلیق هستند، می‌توانید یک کلیک کنید.',
        'MultiFunctionDesKey'   :'شما می توانید با یک کلیک، توکن های erc20 را صادر کنید که قابل تعلیق، ضرب و',
        'FlashMintDesKey'       :'',
        'PermitDesKey'          :'',
        'VotesDesKey'           :'',
        'FormTipsKey'           :''
    },

    'ja': {
        'SiteTitle'             : 'Token Factory - イーサリアム上でワンクリックで独自のトークンを発行',
        'typeOfToken'           : 'タイプ OF トークン',
        'Fix Token'             :'ERC20定額トークン',
        'Burnable Token'        :'ERC20 バーナブルトークン',
        'Mintable Token'        :'ERC20 Mintable トークン',
        'Pausable Token'        :'ERC20一時停止可能トークン',
        'Full Function Token'   :'ERC20マルチファンクショントークン',
        'FlashMint Token'       :'フラッシュミントトークン',
        'Permit Token'          :'許可トークン',
        'Votes Token'           :'投票トークン',
        'Name'                  :'トークン名(例:Tesla)',
        'Symbol'                :'トークンシンボル(例: TSLA)',
        'SupplyAmount'          :'供給量(例: 10000000)',
        'InitSupplyAmount'      :'初期供給量(例: 30000000000)',
        'AdminAddress'          :'管理者アドレス',
        'FixedDesKey'           :'ワンクリックで一定量のerc20トークンを発行できます。',
        'BurnableDesKey'        :'ワンクリックで破壊可能なerc20トークンを発行できます',
        'MintableDesKey'        :'ワンクリックでmintable erc20トークンを発行し、指定したアドレスのmintトークンをいつでも発行できます.',
        'PausableDesKey'        :'一時停止可能なerc20トークンをワンクリックで発行できます。',
        'MultiFunctionDesKey'   :'一時停止、鋳造、破棄可能なerc20トークンをワンクリックで発行できます。',
        'FlashMintDesKey'       :'組み込みのフラッシュ ローン。同じトランザクションで返される限り、担保を必要とせずにトークンを貸与します。',
        'PermitDesKey'          :'信頼できるアカウントに自分の投票権を委任する方法で、オンチェーン ガバナンスで投票するための過去の残高を追跡します。',
        'VotesDesKey'           :'ガスを支払うことなく、トークン所有者は第三者が自分のアカウントから送金できるようになります。',
        'FormTipsKey'           :'フォームに完全に記入してください'
    },

    'th': {
        'SiteTitle'             :'โรงงานโทเค็น - การออกโทเค็นของคุณเองบน Ethereum ด้วยคลิกเดียว',
        'typeOfToken'           :'ประเภทของโทเค็น',
        'Fix Token'             :'ERC20 โทเค็นจำนวนเงินคงที่',
        'Burnable Token'        :'ERC20 โทเค็นที่เผาได้',
        'Mintable Token'        :'ERC20 Mintable',
        'Pausable Token'        :'ERC20 โทเค็นหยุดชั่วคราว',
        'Full Function Token'   :'ERC20 โทเค็นมัลติฟังก์ชั่น',
        'FlashMint Token'       :'Flash Mint Token',
        'Permit Token'          :'ใบอนุญาตโทเค็น',
        'Votes Token'           :'โทเค็นการโหวต',
        'Name'                  :'ชื่อโทเค็น (เช่น: Tesla)',
        'Symbol'                :'สัญลักษณ์โทเค็น (เช่น: TSLA)',
        'SupplyAmount'          :'ปริมาณการจัดหา (เช่น: 10000000)',
        'InitSupplyAmount'      :'ปริมาณการจัดหาเริ่มต้น (เช่น: 2000000000000)',
        'AdminAddress'          :'ที่อยู่ผู้ดูแลระบบ',
        'FixedDesKey'           :'คุณสามารถออกโทเค็น erc20 จำนวนคงที่ได้ด้วยคลิกเดียว',
        'BurnableDesKey'        :'คุณสามารถออกโทเค็น erc20 ที่ทำลายได้ด้วยการคลิกเพียงครั้งเดียว',
        'MintableDesKey'        :'คุณสามารถออกโทเค็น erc20 ที่ปรับแต่งได้ด้วยการคลิกเพียงครั้งเดียว และโทเค็นมิ้นต์สำหรับที่อยู่ที่ระบุได้ตลอดเวลา',
        'PausableDesKey'        :'คุณสามารถคลิกเพียงครั้งเดียวเพื่อออกโทเค็น erc20 ที่สามารถระงับได้',
        'MultiFunctionDesKey'   :'คุณสามารถคลิกเพียงครั้งเดียวเพื่อออกโทเค็น erc20 ที่สามารถระงับ สร้างใหม่ และสามารถถูกทำลายได้',
        'FlashMintDesKey'       :'สินเชื่อแฟลชในตัว ให้ยืมโทเค็นโดยไม่ต้องมีหลักประกันตราบเท่าที่มีการส่งคืนในธุรกรรมเดียวกัน',
        'PermitDesKey'          :'ติดตามยอดดุลในอดีตสำหรับการลงคะแนนในการกำกับดูแลแบบ on-chain ด้วยวิธีการมอบหมายอำนาจการลงคะแนนของบุคคลหนึ่งไปยังบัญชีที่เชื่อถือได้',
        'VotesDesKey'           :'โดยไม่ต้องจ่ายแก๊ส ผู้ถือโทเค็นจะสามารถอนุญาตให้บุคคลที่สามโอนจากบัญชีของตนได้',
        'FormTipsKey'           :'กรุณากรอกแบบฟอร์มให้ครบถ้วน'
    }

};

// Process translation
$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

var usrlang='en';
usrlang = navigator.language  || navigator.userLanguage;
console.log("User's preferred language is: "  , usrlang);

var lang = usrlang;

$('.lang').each(function(index, item) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
});
