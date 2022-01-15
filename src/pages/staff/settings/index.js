import { useState } from 'react'
import { useRouter } from 'next/router'
import SideNav from '@/components/molecules/SideNav'
import Heading from '@/components/atoms/Heading'
import Layout from '@/components/organisms/Layout2'
import { FaUserCog } from 'react-icons/fa'
import {
  Box,
  Flex,
  Text,
  Avatar,
  AvatarBadge,
  FormControl,
} from '@chakra-ui/react'
import styles from '@/styles/Settings.module.css'
import { BsPencil, BsUser } from 'react-icons/bs'
import Button from '@/components/atoms/Button'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function SettingsPage({ user }) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  // const notify = (type, message) => {
  //   if (type === 'success') {
  //     return toast.success(message)
  //   }
  //   return toast.error(message)
  // }

  const [showModal, setShowModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  
  // const [values, setValues] = useState({
  //   name: user.name ? user.name : '',
  //   email: user.email ? user.email : '',
  //   phone: user.phone ? user.phone : '',
  //   address: user.profile.permanent_address
  //     ? user.profile.permanent_address
  //     : '',
  //   alternate_phone: user.profile.alternate_phone
  //     ? user.profile.alternate_phone
  //     : '',
  //   vehicle_type: user.vehicle ? user.vehicle : '',
  //   dob: user.profile.dob ? user.profile.dob : '',
  //   state_of_origin: user.profile.state_of_origin
  //     ? user.profile.state_of_origin
  //     : '',
  //   nationality: user.profile.nationality ? user.profile.nationality : '',
  //   present_address: user.profile.current_address
  //     ? user.profile.current_address
  //     : '',
  //   permanent_address: user.profile.permanent_address
  //     ? user.profile.permanent_address
  //     : '',
  //   state: user.profile.state ? user.profile.state : '',
  //   post_code: user.profile.post_code ? user.profile.post_code : '',
  //   lg: user.profile.lg ? user.profile.lg : '',
  //   lga: user.profile.lga ? user.profile.lga : '',
  //   region: user.profile.region ? user.profile.region : '',
  //   overtime: user.profile.overtime ? user.profile.overtime : '',
  //   position_type: user.profile.position_type ? user.profile.position_type : '',
  //   institude: user.qualifications[0].institude,
  //   qualification: user.qualifications[0].qualification,
  // })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    var myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Authorization', `Bearer ${token}`)

    var formdata = new FormData()
    formdata.append('phone', values.phone)
    formdata.append('email', values.email)
    formdata.append('name', values.name)
    formdata.append('alternate_phone', values.alternate_phone)
    formdata.append('vehicle_type', values.vehicle_type)
    formdata.append('dob', values.dob)
    formdata.append('state_of_origin', values.state_of_origin)
    formdata.append('nationality', values.nationality)
    formdata.append('present_address', values.present_address)
    formdata.append('permanent_address', values.permanent_address)
    formdata.append('state', values.state)
    formdata.append('post_code', values.post_code)
    formdata.append('lg', values.lg)
    formdata.append('lga', values.lga)
    formdata.append('region', values.region)
    formdata.append('institude[]', values.institude)
    formdata.append('qualification[]', values.qualification)
    formdata.append('id[]', '2')

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    const res = await fetch(`${API_URL}/update_profile`, requestOptions)
    const data = await res.json()

    router.push('/dashboard/settings/profile/')

    setLoading(false)
  }

  const handlePassportUpload = async (e) => {
    setSelectedFile(e.target.files[0])
    var myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Authorization', `Bearer ${token}`)

    var formdata = new FormData()
    formdata.append('passport', e.target.files[0], '[PROXY]')

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch(`${API_URL}/update_profile_image`, requestOptions)
      .then((result) => result.json())
      .then((data) => {
        if (data.success) {
          // notify('success', data.message)
          console.log("Message")
        } else {
          // notify('error', data.message)
          console.log("Message")
        }
      })
      .catch((error) => {
        console.log(error)
      })

    router.push('/dashboard/settings/profile/')
  }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   setValues({ ...values, [name]: value })
  // }
  
  return (
    <Layout>
      <div className={styles.flexContainer}>
        <SideNav />
        <div className={styles.profileSetting}>
          <Heading icon={<FaUserCog />} title='Settings Page' />

          {/* <ToastContainer
            position='top-center'
            autoClose={8000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
          <div>
            <div className={styles.form} p='6'>
              <Box textAlign='center' className={styles.avatarBox}>
                <Avatar
                  size='2xl'
                  mt='10'
                  className={styles.avatar}
                  // name={user.name}
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : user?.passport
                  }
                >
                  <AvatarBadge
                    className={styles.avatarBadge}
                    boxSize='0.8em'
                    borderRadius='md'
                    bg='red.500'
                    // onClick={() => setShowModal(true)}
                  >
                    {' '}
                    <input
                      accept='image/*'
                      onChange={handlePassportUpload}
                      required
                      type='file'
                      style={{ opacity: '0', position: 'absolute' }}
                    />
                    <BsPencil color='white' fontSize='1.5rem' />
                  </AvatarBadge>
                </Avatar>
              </Box>

              <form onSubmit={handleSubmit}>
                <Box className={styles.form}>
                  <Text textAlign='left' mb='4' mt='7' fontWeight='bold'>
                    Personal Data
                  </Text>
                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='name'
                          placeholder='Name'
                          name='name'
                          // value={values.name}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='email'
                          id='email'
                          placeholder='Email'
                          name='email'
                          // value={values.email}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='phone'
                          placeholder='Phone Number'
                          name='phone'
                          // value={values.phone}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='alternate_phone'
                          placeholder='Alternative Phone Number'
                          name='alternate_phone'
                          // value={values.alternate_phone}
                          // onChange={handleInputChange}
                          // required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '100%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='address'
                          placeholder='Address'
                          name='address'
                          // value={values.address}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    
                  </Flex>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                    <FormControl>
                        <input
                          type='date'
                          id='dob'
                          placeholder='Date of birth'
                          name='dob'
                          // value={values.dob}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='state_of_origin'
                          placeholder='State of Origin'
                          name='state_of_origin'
                          // value={values.state_of_origin}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='lga'
                          placeholder='Local Govt Area'
                          name='lga'
                          // value={values.lga}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='nationality'
                          placeholder='Nationality'
                          name='nationality'
                          // value={values.nationality}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Text textAlign='left' mb='4' mt='7' fontWeight='bold'>
                    Education
                  </Text>

                  {/* {user.qualifications.map((qualification, index) => ( */}
                  <Flex
                    wrap='wrap'
                    justify='space-between'
                    // key={qualification.id}
                  >
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='institude'
                          placeholder='Instiution attended'
                          name='institude'
                          // value={values.institude}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='qualification'
                          placeholder='Qualification'
                          name='qualification'
                          // value={values.qualification}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Text textAlign='left' mb='4' mt='7' fontWeight='bold'>
                    Residential Details
                  </Text>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='present_address'
                          placeholder='Present Address'
                          name='present_address'
                          // value={values.present_address}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='permanent_address'
                          placeholder='Permenent Address'
                          name='permanent_address'
                          // value={values.permanent_address}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='post_code'
                          placeholder='Zip code'
                          name='post_code'
                          // value={values.post_code}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='state'
                          placeholder='State'
                          name='state'
                          // value={values.state}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='lg'
                          placeholder='Local Govt Area'
                          name='lg'
                          // value={values.lg}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>

                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <input
                          type='text'
                          id='region'
                          name='region'
                          placeholder='Region'
                          // value={values.region}
                          // onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Box display="flex" alignItems="center" justifyContent="end" my="2rem">
                    <Button disabled={loading}>
                      {loading ? 'Loading...' : 'Save Changes'}
                    </Button>
                  </Box>
                </Box>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
