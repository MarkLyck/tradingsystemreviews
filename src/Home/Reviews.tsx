import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled'
import { Table, Tag, Space } from 'antd'
import dataSource, { IN_PROGRESS, PENDING } from './data'

const TableContainer = styled.div`
  table {
    box-shadow: 0 4px 14px 0 rgba(111, 120, 156, 0.08);
  }
  tbody {
    tr:hover {
      cursor: pointer;
    }
  }
`

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
    render: (value) => value,
  },
  {
    title: 'Asset type',
    dataIndex: 'assetType',
    key: 'assetType',
    render: (value, review) => {
      if (!value) {
        return 'N/A'
      }
      return value
    },
  },
  {
    title: 'Strategy',
    dataIndex: 'strategy',
    key: 'strategy',
    render: (value, review) => {
      if (!value) {
        return 'N/A'
      }
      return value
    },
  },
  {
    title: 'Win ratio',
    dataIndex: 'winRate',
    key: 'winRate',
    render: (value) => {
      if (!value) {
        return 'N/A'
      }
      return `${value.toFixed(2)}%`
    },
  },
  {
    title: 'Avg. return',
    dataIndex: 'averageReturn',
    key: 'averageReturn',
    render: (value) => {
      if (!value) {
        return 'N/A'
      }

      return `+${value.toFixed(2)}%`
    },
  },
  {
    title: 'Risk',
    dataIndex: 'risk',
    key: 'risk',
    render: (value) => {
      if (!value) {
        return 'N/A'
      }
      return `${value}`
    },
  },
  {
    title: 'Avg. holding period',
    dataIndex: 'holdingPeriod',
    key: 'holdingPeriod',
    render: (value) => {
      if (!value) {
        return 'N/A'
      }

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
        return 'Review in progress'
      }
      if (review.status === PENDING) {
        return 'Pending review'
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
