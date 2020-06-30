import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled'
import { Table, Space } from 'antd'
import { Tag } from '~/ui-components/Tag'
import dataSource, { IN_PROGRESS, PENDING, SCAM, UNKNOWN, UNDISCLOSED } from './data'
import PendingReview from '~/ui-components/Tag/PendingReview'
import ReviewInProgress from '~/ui-components/Tag/ReviewInProgress'

const TableContainer = styled.div`
  .ant-table-container {
    overflow: auto;
  }

  table {
    box-shadow: 0 4px 14px 0 rgba(111, 120, 156, 0.08);
    td,th {
      white-space: nowrap;
    }
  }
  
  tbody {
    tr: {
      &:hover {
      cursor: pointer;
    }
  }
`

const NotAvailableText = styled.p`
  color: ${(props) => props.theme.palette.disabled};
  margin: 0;
`

const NotAvailable = () => <NotAvailableText>N/A</NotAvailableText>
const Undisclosed = () => <NotAvailableText>Undisclosed</NotAvailableText>
const Unknown = () => <NotAvailableText>Unknown</NotAvailableText>

const columns = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    render: (_value, _review, index) => {
      return index + 1
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_value, review) => review.key,
  },
  {
    title: 'Asset type',
    dataIndex: 'assetType',
    key: 'assetType',
    render: (value, review) => {
      if (value === null) return <Undisclosed />
      if (!value) return <NotAvailable />
      return value
    },
  },
  {
    title: 'Strategy',
    dataIndex: 'strategy',
    key: 'strategy',
    render: (value, review) => {
      if (value === UNDISCLOSED) return <Undisclosed />
      if (!value) return <NotAvailable />

      return value
    },
  },
  {
    title: 'Win ratio',
    dataIndex: 'winRate',
    key: 'winRate',
    render: (value) => {
      if (value === UNDISCLOSED) return <Undisclosed />
      if (!value) return <NotAvailable />
      return `${value.toFixed(2)}%`
    },
  },
  {
    title: 'Avg. return',
    dataIndex: 'averageReturn',
    key: 'averageReturn',
    render: (value) => {
      if (value === UNDISCLOSED) return <Undisclosed />
      if (!value) return <NotAvailable />

      return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`
    },
  },
  {
    title: 'Risk',
    dataIndex: 'risk',
    key: 'risk',
    render: (value) => {
      if (value === UNDISCLOSED) return <Undisclosed />
      if (!value) return <NotAvailable />
      if (value === UNKNOWN) return <Unknown />

      return `${value}`
    },
  },
  {
    title: 'Effort',
    dataIndex: 'effort',
    key: 'effort',
    render: (value) => {
      if (value === UNDISCLOSED) return <Undisclosed />
      if (!value) return <NotAvailable />

      return `${value}`
    },
  },
  {
    title: 'Avg. holding period',
    dataIndex: 'holdingPeriod',
    key: 'holdingPeriod',
    render: (value) => {
      if (value === UNDISCLOSED) return <Undisclosed />
      if (!value) return <NotAvailable />

      return value
    },
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'Price',
    render: (value) => {
      if (value === UNDISCLOSED) return <Undisclosed />
      if (!value) return <NotAvailable />

      return value
    },
  },
  {
    title: 'Rating',
    dataIndex: 'score',
    key: 'score',
    fixed: 'right',
    render: (value, review) => {
      if (review.status === IN_PROGRESS) {
        return <ReviewInProgress />
      }
      if (review.status === PENDING) {
        return <PendingReview />
      }

      if (value === SCAM) {
        return (
          <Tag type="worst" variant="hollow" icon="👎">
            SCAM
          </Tag>
        )
      }

      return `${value}/100`
    },
  },
]

const onRow = (router) => (record) => ({
  onClick: () => {
    router.push(record.reviewLink)
  },
})

const Reviews = () => {
  const router = useRouter()
  return (
    <TableContainer>
      {/* @ts-ignore */}
      <Table dataSource={dataSource} columns={columns} onRow={onRow(router)} />
    </TableContainer>
  )
}

export default Reviews
