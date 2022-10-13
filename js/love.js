let app;
$(function () {
    // vueSet
    vueSet();
});

// vueSet
function vueSet() {
    app = new Vue({
        el: '#main',
        data: {
            package: 0,
            totalObj: 0,
            totalAll: 1000,
            T: 0,
            TBS: 0,
            TBM: 0,
            TBL: 0,
            TBXL: 0,
            TWS: 0,
            TWM: 0,
            TWL: 0,
            TWXL: 0,
            bag: 0,
            bagB: 0,
            bagW: 0,
            card: 0,
            bigTowel: 0,
            smallTowel: 0,
            sock: 0,
            price:{
                T: '500',
                bag: '500',
                card: '300',
                bigTowel: '500',
                smallTowel: '400',
                sock: '200'
            },
            priceText:{
                T: 'NT$500',
                bag: 'NT$500',
                card: 'NT$300',
                bigTowel: 'NT$500',
                smallTowel: 'NT$400',
                sock: 'NT$200'
            }
        },
        beforeCreate: function () {
            // console.log('beforeCreate');
        },
        created: function () {
            // console.log('created');   
        },
        methods: {
            ThousandsSign: function (_totleAll) {
                return ("NT$" + (Math.round(_totleAll * 100) / 100).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            },
            planningTotla: function () {
                this.T = this.TBS + this.TBM + this.TBL + this.TBXL + this.TWS + this.TWM + this.TWL + this.TWXL;
                this.bag = this.bagB + this.bagW;

                this.totalObj = this.T + this.bag + this.card + this.bigTowel + this.smallTowel +

                    this.totalAll = 0;
            }
        },
        computed: {
            totalAllText: function () {
                this.planningTotla();
                return this.ThousandsSign(this.totalAll);
            },
        },
        updated: function () {
            // console.log('updated');
        }
    })
}