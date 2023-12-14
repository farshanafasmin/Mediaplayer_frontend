import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapi'



// use props to handle serverresponse
function View(serverResponse) {
  // to store api response
  // we get response from the api as array,so to allocate this to usestate hook
  const [allVideos, setallVideos] = useState([])

  const [deleteStatus, setdeletestatus] = useState(false)
  // useEffectsnippet
  useEffect(() => {

    // call getvideos
    getallVideos()


  }, [serverResponse,deleteStatus])

  // create a function
  // view videos when page load
  const getallVideos = async () => {
    const response = await getVideo()
    //  console.log(response.data);
    // update the response data to allvideos state
    setallVideos(response.data)
  }
  console.log(allVideos);

  // delete function

  const handledeletestatus = (res) => {
    setdeletestatus(res)
  }



  return (
    <>
      <div className='border p-3 rounded m-4'>
        <Row>
          {/* 1.share data from js to jsx 
          2.duplicate col
          3.assign each videos to variable 'video' using map method
          4.data in video is passed to component selector <videocard/>*/}
          {
            allVideos.map(video => (

              <Col className='p-3 mt-3' sm={12} md={6}>
                {/* card is a property  used to destructure props */}
                <VideoCard card={video} handledeletestatus={handledeletestatus} />

              </Col>

            ))


          }
        </Row>

      </div>

    </>
  )
}

export default View