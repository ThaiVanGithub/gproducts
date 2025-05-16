import { ref } from 'vue'
import Banner from '@/components/Banner.vue'

import Introduce from '@/components/Introduce.vue'
import song from '@/assets/song.jpg'
import nhamay from '@/assets/nhamay.jpg'
import thanhpho from '@/assets/thanhpho.jpg'
import tp2 from '@/assets/tp2.jpg'
import onghutre from '@/assets/onghutre.jpg'
import muongdiatre from '@/assets/muongdiatre.jpg'
import hopbamia from '@/assets/hopbamia.jpg'
import hocgo from '@/assets/hocgo.jpg'
import amtratre from '@/assets/amtratre.jpg'
import thotgo from '@/assets/thotgo.jpg'
import cuago from '@/assets/cuago.jpg'
import bango from '@/assets/bango.jpg'
import duongmia from '@/assets/duongmia.jpg'



const options = ref([
    {
      value: 'An Giang',
      label: 'An giang',
      children: [
        {
          value: 'Huyện Thoại Sơn',
          label: 'Huyện Thoại Sơn',
          
          children: [
            {
              value: 'Thị Trấn Núi Sập',
              label: 'Thị Trấn Núi Sập',
            },
          ],
        },
      ],
    },
    {
      value: 'Cần Thơ',
      label: 'Cần Thơ',
      children: [
        {
          value: 'Quận Thốt Nốt',
          label: 'Quận Thốt Nốt',
          children: [
            {
              value: 'Thạnh Thắng',
              label: 'Thạnh Thắng',
            },
          ],
        },
      ],
    },
    {
      value: 'Hồ Chí Minh',
      label: 'Hồ Chí Minh',
      children: [
        {
          value: 'Quận 2',
          label: 'Quận 2',
          
          children: [
            {
              value: 'Đường Nguyễn Văn Linh',
              label: 'Đường Nguyễn Văn Linh',
            },
          ],
        },
      ],
    },
        {
        value: 'Tiền Giang',
        label: 'Tiền Giang',
        children: [
          {
            value: 'Mỹ Tho',
            label: 'Mỹ Tho',
            
            children: [
              {
                value: 'Mỹ Tho',
                label: 'Mỹ Tho',
              },
            ],
          },
        ],
      },
  ]);
  const products = ref([
    {
      name: 'Ống hút tre tự nhiên',
      price: 50000,
      oldPrice: 120000,
      discount: 20,
      image: onghutre,
      category: 'kitchenware',
      title: 'Sản phẩm được làm từ tre tự nhiên, an toàn cho sức khỏe và môi trường.',
    },
    {
      name: 'Thìa tre thân thiện thiên nhiên',
      price: 8000,
      oldPrice: 250000,
      discount: 10,
      image: muongdiatre,
      category: 'kitchenware',
      title: 'Thìa tre tự nhiên, an toàn cho sức khỏe và môi trường.',
    },
    {
      name: 'Hộp làm từ bả mía',
      price: 5000,
      image: hopbamia,
      category: 'kitchenware',
      title: 'Hộp làm từ bả mía, an toàn cho sức khỏe và môi trường.',
    },
    {
      name: 'Hộc đựng muỗng đĩa',
      price: 89000,
      discount: 70,
      image: hocgo,
      category: 'kitchenware',
      title: 'Hộc đựng muỗng đĩa, an toàn cho sức khỏe và môi trường.',
    },
    {
      name: 'Ấm trà tre tự nhiên',
      price: 230000,
      discount: 10,
      category: 'kitchenware',
      image: amtratre,
      title: 'Ấm trà tre tự nhiên, an toàn cho sức khỏe và môi trường.',
    },
    {
      name: 'Thớt gỗ đẹp màu nâu',
      price: 150000,
      discount: 10,
      category: 'kitchenware',
      image: thotgo,
      title: 'Thớt gỗ đẹp màu nâu, an toàn cho sức khỏe và môi trường.',
    },
    {
      name: 'Cửa gỗ thẩm mỹ',
      price: 150000,
      discount: 10,
      category: 'furniture',
      image: cuago,
      title: 'Cửa gỗ thẩm mỹ, an toàn cho sức khỏe và môi trường.',
    },
    {
      name: 'Đường mía tự nhiên',
      price: 40000,
      category: 'food',
      discount: 10,
      image: duongmia,
      title: 'Đường mía tự nhiên, an toàn cho sức khỏe và môi trường.',
    },
  ])
  

  
  // Format giá tiền VNĐ
  const formatPrice = (value) => {
    return value.toLocaleString('vi-VN') + '₫'
  }
  

  export default {
    products,
    options,
    formatPrice
  }